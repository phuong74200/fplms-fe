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
    const roles = ['Leader', 'Member'];
    const groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'];

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
                                <StFilterLabel>Search Students</StFilterLabel>
                                <StSerachBox
                                    type="text"
                                    value={search}
                                    placeholder="Search students by name..."
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </StFilterColumn>
                            <StFilterColumn>
                                <StFilterLabel>Role</StFilterLabel>

                                <Selection arr={roles} label={'Select Role'} />
                            </StFilterColumn>
                            <StFilterColumn>
                                <StFilterLabel>Group by</StFilterLabel>
                                <Selection arr={groups} label={'Select Group'} />
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
