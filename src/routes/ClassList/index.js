import { useState, useEffect } from 'react';

import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { ClassSection as Section, CreateClassForm, Button } from '../../components';
import ClassSectionHolder from '../../components/ClassSection/holder';
import { Container, StyledList, StyledInput, ToolBar } from './style';

const ClassList = () => {
    const [classes, setClass] = useState();
    const [loadAnim] = useState(
        new Array(10).fill(ClassSectionHolder).map((Load, i) => <Load key={i} />)
    );
    const [filter, setFilter] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [isCreate, setCreate] = useState(false);
    const [searchClass, setSearch] = useState('');

    const user = jwt_decode(localStorage.getItem('token'));

    const API_LECTURER = process.env.REACT_APP_API_URL + '/management/classes';
    const API_STUDENT = process.env.REACT_APP_API_URL + `/management/classes/student`;
    const header = {
        Authorization: `${localStorage.getItem('token')}`,
    };

    useEffect(() => {
        if (user.role == 'Lecturer') {
            axios
                .get(
                    API_LECTURER,
                    {
                        headers: header,
                    },
                    {
                        userEmail: user.email,
                    }
                )
                .then((res) => {
                    const data = res.data;
                    setClass(data.data);
                    setLoading(false);
                });
        } else {
            axios
                .get(
                    API_STUDENT,
                    {
                        headers: header,
                        params: {
                            search: searchClass,
                        },
                    },
                    {
                        userEmail: user.email,
                    }
                )
                .then((res) => {
                    const data = res.data;
                    console.log(data);
                    setClass(data.data);
                    setLoading(false);
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            axios
                .get(
                    API_STUDENT,
                    {
                        headers: header,
                        params: {
                            search: searchClass,
                        },
                    },
                    {
                        userEmail: user.email,
                    }
                )
                .then((res) => {
                    const data = res.data;
                    setClass(data.data);
                    setLoading(false);
                });
        }
    };

    const open = () => {
        setCreate(true);
    };

    const search = (e) => {
        setFilter(e.target.value);
        setSearch(e.target.value);
    };

    const realData = () => {
        return classes
            .filter((classData) => classData.name?.toLowerCase().includes(filter.toLowerCase()))
            .map((classData, index) => (
                <Section
                    key={index}
                    {...classData}
                    className={classData.name.toUpperCase()}
                    lecture="huongntc2@fpt.edu.vn"
                    fullClassName={classData.semester}
                    subjectId={classData.subjectId}
                    user={user}
                    id={classData.id}
                />
            ));
    };

    return (
        <>
            <CreateClassForm showing={isCreate} setCreate={setCreate} setClass={setClass} />
            <Container>
                <ToolBar>
                    <StyledInput
                        type="text"
                        placeholder="Search for class..."
                        spellcheck="false"
                        onChange={search}
                        onKeyUp={handleSearch}
                    ></StyledInput>
                    {user.role == 'Lecturer' && <Button onClick={open}>Create New Class</Button>}
                </ToolBar>
                <StyledList>{isLoading ? loadAnim : realData()}</StyledList>
            </Container>
        </>
    );
};

export default ClassList;
