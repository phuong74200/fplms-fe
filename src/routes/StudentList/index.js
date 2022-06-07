import { useState } from 'react';

import { StudentRow } from '../../components';
import Pagination from '../../components/Pagination';
import Selection from '../../components/Selection';
import {
    StyledContainer,
    StHeader,
    StFilterColumn,
    StFilterLabel,
    StSerachBox,
    StFilterContainer,
    StFilterLeft,
    StFilterRight,
    SettingBtn,
    StudentListContainer,
    StHeaderContent,
    StClass,
    StLogo,
    StHeaderTitle,
    THead,
    TRow,
    TBody,
    TableContainer,
    Table,
    TableCell,
} from './style';

import SettingsIcon from '@mui/icons-material/Settings';

const StudentList = () => {
    document.title = 'StudentList';
    const [search, setSearch] = useState('');
    const roles = [
        {
            content: 'Leader',
            value: 1,
        },
        {
            content: 'Memeber',
            value: 2,
        },
    ];
    const groups = [
        {
            content: 'Group 1',
            value: 'Group 1',
        },
        {
            content: 'Group 2',
            value: 'Group 2',
        },
        {
            content: 'Group 3',
            value: 'Group 3',
        },
        {
            content: 'Group 4',
            value: 'Group 4',
        },
        {
            content: 'Group 5',
            value: 'Group 5',
        },
    ];

    const createData = (studentName, studentID, groupName, role, reports, action) => {
        return { studentName, studentID, groupName, role, reports, action };
    };
    const [rows] = useState([
        createData('Quach Heng To Ni', 'SE161101', 'Group 1', 'Leader', 32, 'Remove'),
        createData('Mai Thanh Phuong', 'SE161100', 'Group 1', 'Member', 32, 'Remove'),
        createData('Tran Nhat Hoang', 'SE161102', 'Group 1', 'Member', 32, 'Remove'),
        createData('Nguyen Thanh Kien', 'SE161103', 'Group 1', 'Member', 32, 'Remove'),
        createData('Pham Trong Thanh', 'SE161104', 'Group 1', 'Member', 32, 'Remove'),
        createData('Vuong Tran Dieu Anh', 'SE161105', 'Group 2', 'Member', 32, 'Remove'),
        createData('Nguyen Dang Khoa', 'SE161106', 'Group 2', 'Member', 32, 'Remove'),
        createData('Nguyen Duc Thien', 'SE161107', 'Group 2', 'Member', 32, 'Remove'),
        createData('Duong Chi Khang', 'SE161108', 'Group 2', 'Member', 32, 'Remove'),
    ]);

    return (
        <>
            <StyledContainer>
                <StHeader>
                    <StLogo />
                    <StHeaderContent>
                        <StHeaderTitle>Student List</StHeaderTitle>
                        <StClass>SE1631</StClass>
                    </StHeaderContent>
                </StHeader>
                <form>
                    <StFilterContainer>
                        <StFilterLeft>
                            <StFilterColumn>
                                <small>Search Students</small>
                                <StSerachBox
                                    type="text"
                                    value={search}
                                    placeholder="Search students by name..."
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </StFilterColumn>
                            <StFilterColumn>
                                <Selection
                                    title={'Role'}
                                    options={roles}
                                    placeholder={'Select Role'}
                                />
                            </StFilterColumn>
                            <StFilterColumn>
                                <Selection
                                    title={'Group by'}
                                    options={groups}
                                    placeholder={'Select Group'}
                                />
                            </StFilterColumn>
                        </StFilterLeft>
                        <StFilterRight>
                            <StFilterColumn style={{ margin: 0 }}>
                                <StFilterLabel style={{ color: '#fff' }}>G</StFilterLabel>
                                <SettingBtn type="submit">
                                    <SettingsIcon />
                                    Save
                                </SettingBtn>
                            </StFilterColumn>
                        </StFilterRight>
                    </StFilterContainer>

                    {/* Student List Table */}
                    <StudentListContainer>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <THead>
                                    <TRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Group</TableCell>
                                        <TableCell>Role</TableCell>
                                        <TableCell>Reports</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TRow>
                                </THead>
                                <TBody>
                                    {rows.map((studentInfo, index) => (
                                        <StudentRow key={index} {...studentInfo} />
                                    ))}
                                </TBody>
                            </Table>
                        </TableContainer>
                    </StudentListContainer>
                </form>
                <Pagination />
            </StyledContainer>
        </>
    );
};

export default StudentList;
