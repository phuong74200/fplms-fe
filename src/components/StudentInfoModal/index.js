import Overlay from '../Overlay';
import { Container, StudentAvatar, StudentContent, Row, Column } from './style';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StudentInfoModal = ({ isShowing, setShowing, data }) => {
    return (
        <Overlay showing={isShowing} setOpen={setShowing}>
            <Container onClick={(e) => e.stopPropagation}>
                <StudentAvatar>
                    <AccountCircleIcon />
                </StudentAvatar>
                <StudentContent>
                    <Row>
                        <Column>Student Name</Column>
                        <Column>{data.name}</Column>
                    </Row>
                    <Row>
                        <Column>Student ID</Column>
                        <Column>{data.id}</Column>
                    </Row>
                    <Row>
                        <Column>Email</Column>
                        <Column>anvse1234@fpt.edu.vn</Column>
                    </Row>
                    <Row>
                        <Column>Group</Column>
                        <Column>{data.group}</Column>
                    </Row>
                    <Row>
                        <Column>Role</Column>
                        <Column>{data.role}</Column>
                    </Row>
                    <Row>
                        <Column>Total reports</Column>
                        <Column>{data.totalReports}</Column>
                    </Row>
                    <Row>
                        <Column>
                            <button>Unenroll</button>
                        </Column>
                    </Row>
                </StudentContent>
            </Container>
        </Overlay>
    );
};

export default StudentInfoModal;
