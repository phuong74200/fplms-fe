import { useState } from 'react';

import StudentInfoModal from '../StudentInfoModal';
import { TableCell, Container, Row, GroupInput } from './style';

const StudentRow = ({ studentName, studentID, groupName, role, reports, action }) => {
    const [group, setGroup] = useState(groupName);
    const [isDisplay, setDisplay] = useState(true);
    const [isShowing, setShowing] = useState(false);
    const [data, setData] = useState({
        name: studentName,
        id: studentID,
        group: groupName,
        role: role,
        totalReports: reports,
    });

    const handleRemove = () => {
        console.log(isDisplay);
        setDisplay(false);
    };
    return (
        <>
            <StudentInfoModal
                isShowing={isShowing}
                setShowing={setShowing}
                data={data}
                setData={setData}
            />
            <Container isDisplay={isDisplay}>
                <Row>
                    <TableCell onClick={() => setShowing(true)} style={{ cursor: 'pointer' }}>
                        {studentName}
                    </TableCell>
                    <TableCell>{studentID}</TableCell>
                    <TableCell>
                        <GroupInput
                            type={'text'}
                            onChange={(e) => setGroup(e.target.value)}
                            placeholder={'Group Name'}
                            value={group}
                        />
                    </TableCell>
                    <TableCell>{role}</TableCell>
                    <TableCell>{reports}</TableCell>
                    <TableCell onClick={handleRemove} style={{ cursor: 'pointer' }}>
                        {action}
                    </TableCell>
                </Row>
            </Container>
        </>
    );
};

export default StudentRow;
