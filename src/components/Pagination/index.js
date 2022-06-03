import PageNum from './PageNum';
import { Container } from './style';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = () => {
    const datas = [1, 2, 3, 4];
    return (
        <>
            <Container>
                <ArrowBackIosNewIcon />
                {datas.map((data, index) => (
                    <PageNum key={index} num={data} />
                ))}
                <ArrowForwardIosIcon />
            </Container>
        </>
    );
};

export default Pagination;
