/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import axios from 'axios';
import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useParams, useNavigate } from 'react-router-dom';

import { Jumbotron, TopActivities } from '../../components';
import AnswerSection from '../../components/AnswerSection';
import PostLoader from '../../components/PostSection/loader';
import { error, success } from '../../utils/toaster';
import {
    StyledContainer,
    StyledHeader,
    Title,
    Subtitle,
    Column,
    StyledBody,
    PostView,
    PostMain,
    PostTitle,
    Divider,
    DropdownMenu,
    Dropdown,
    Row,
} from './style';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const DiscussionView = () => {
    const topMember = [
        {
            name: 'Tran Nhat Hoang',
            point: '15 point',
            value: 15,
        },
        {
            name: 'Quach Heng To Ni',
            point: '2 point',
            value: 2,
        },
        {
            name: 'Mai Thanh Phuong',
            point: '1 point',
            value: 1,
        },
        {
            name: 'Pham Trong Thanh',
            point: '25 point',
            value: 25,
        },
        {
            name: 'Nguyen Thanh Kien',
            point: '5 point',
            value: 5,
        },
    ];
    const [question, setQuestion] = useState();
    const [isLoading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(0);
    let editorState;
    let raw;
    const questionId = useParams().id;
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('user'));

    const URL = process.env.REACT_APP_DISCUSSION_URL + `/questions/${question?.id}`;
    const header = {
        Authorization: `${localStorage.getItem('token')}`,
    };

    if (question && question.content) {
        raw = convertFromRaw(JSON.parse(question.content));
        editorState = EditorState.createWithContent(raw);
    }
    useEffect(() => {
        const URL = process.env.REACT_APP_DISCUSSION_URL + `/questions/${questionId}`;
        const header = {
            Authorization: `${localStorage.getItem('token')}`,
        };
        const fetchData = () => {
            axios
                .get(URL, {
                    headers: header,
                })
                .then((res) => {
                    if (res.status == 200) {
                        setQuestion(res.data);
                        setLoading(false);
                    } else {
                        error(`An error occured!`);
                        setLoading(false);
                    }
                })
                .catch((err) => error(err));
        };
        fetchData();
    }, [questionId, refresh]);

    const deleteQuestion = () => {
        axios.delete(URL, { headers: header }).then((res) => {
            if (res.status >= 200 && res.status < 300) {
                success(`Delete question successfully!`);
                navigate(-1);
            } else {
                error(`${res.message}`);
            }
        });
    };

    return (
        <>
            <StyledContainer>
                <Jumbotron title={'discussion'} subtitle={question?.title} />

                {isLoading ? (
                    <PostLoader />
                ) : (
                    <>
                        <StyledHeader>
                            <img src={question?.student.picture} alt="Student Avatar" />
                            <Column>
                                <Title>{question?.student.email}</Title>
                                <Subtitle>{question.createdDate}</Subtitle>
                            </Column>
                        </StyledHeader>
                        <StyledBody>
                            <Column>
                                <PostView>
                                    <PostMain>
                                        <Row>
                                            <Column>
                                                <PostTitle>{question.title}</PostTitle>
                                            </Column>
                                            {userInfo.email === question?.student.email && (
                                                <Column>
                                                    <Dropdown>
                                                        <button
                                                            className="sub-option"
                                                            onClick={(e) => e.stopPropagation}
                                                        >
                                                            <MoreVertIcon />
                                                        </button>
                                                        <DropdownMenu className="dropdown-menu">
                                                            <DeleteIcon onClick={deleteQuestion} />
                                                            <EditIcon
                                                                onClick={() =>
                                                                    navigate(
                                                                        `/add-question?id=${question?.id}`
                                                                    )
                                                                }
                                                            />
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </Column>
                                            )}
                                        </Row>

                                        <Editor
                                            readOnly={true}
                                            editorState={editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                        />
                                        <Divider />
                                    </PostMain>
                                    <AnswerSection
                                        questionId={questionId}
                                        setQuestion={setQuestion}
                                        answers={question.answers}
                                        student={question.student}
                                        setRefresh={setRefresh}
                                    />
                                </PostView>
                            </Column>
                            <Column>
                                <TopActivities arr={topMember} />
                            </Column>
                        </StyledBody>
                    </>
                )}
            </StyledContainer>
        </>
    );
};

export default DiscussionView;
