import { useState } from 'react';

import { PageBlock } from './style';

const PageNum = ({ num }) => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <PageBlock isActive={isActive} onClick={() => setActive(true)}>
                {num}
            </PageBlock>
        </>
    );
};

export default PageNum;
