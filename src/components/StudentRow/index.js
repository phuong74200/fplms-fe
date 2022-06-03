import { useState } from 'react';

import { TableCell, Container, Row, GroupInput } from './style';

const StudentRow = ({ studentName, studentID, groupName, role, reports, action }) => {
    const [group, setGroup] = useState(groupName);
    const [isDisplay, setDisplay] = useState(true);
    const handleRemove = () => {
        console.log(isDisplay);
        setDisplay(false);
    };
    return (
        <>
            <Container isDisplay={isDisplay}>
                <Row>
                    <TableCell>{studentName}</TableCell>
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
