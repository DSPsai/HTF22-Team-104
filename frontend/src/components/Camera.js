import React from 'react'
import { Box } from '@mui/system'
import { useState } from 'react';

export default function Camera() {
    const [isS, setS] = useState(true)
    return (
        <div><Box sx={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}>
            <Box sx={{ width: '80vw', height: '60vh', backgroundColor: '#EFEDED', margin: 'auto' }}>
            </Box>
            <br />
            <Box sx={{ mt: '20px', margin: 'auto', marginTop: '30px' }}>
                <Box onClick={() => {
                    setS(!isS)
                }} sx={{
                    backgroundColor: '#FD182D',
                    fontSize: '20px',
                    color: 'white',
                    padding: '10px',
                    pl: '20px', pr: '20px',
                    borderRadius: '10px',
                    cursor: 'pointer'
                }}>
                    {isS ? 'Start' : 'Stop'} Journey
                </Box>
            </Box>
            <br />
            <Box sx={{
                border: '1px solid black',
                display: 'flex',
                flexFlow: 'row',
                margin: 'auto',
                p: '10px',
                borderRadius: '10px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box >Total Blinks</Box>
                    <Box ><b>2040</b></Box>
                </Box>
                <Box sx={{ ml: '20px', p: '10px', backgroundColor: '#FF9066', borderRadius: '5px' }}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.8489 11.8664C22.4952 7.27395 17.8355 4.16675 12.5 4.16675C7.16447 4.16675 2.50345 7.27612 0.151018 11.8668C0.0517306 12.0632 0 12.2802 0 12.5003C0 12.7204 0.0517306 12.9374 0.151018 13.1338C2.50475 17.7262 7.16447 20.8334 12.5 20.8334C17.8355 20.8334 22.4965 17.724 24.8489 13.1333C24.9482 12.9369 25 12.7199 25 12.4999C25 12.2798 24.9482 12.0628 24.8489 11.8664ZM12.5 18.7501C11.2638 18.7501 10.0555 18.3835 9.02766 17.6968C7.99985 17.01 7.19878 16.0339 6.72573 14.8919C6.25268 13.7498 6.12891 12.4931 6.37007 11.2808C6.61123 10.0684 7.20648 8.95474 8.08056 8.08066C8.95464 7.20659 10.0683 6.61133 11.2807 6.37017C12.493 6.12902 13.7497 6.25279 14.8917 6.72583C16.0338 7.19888 17.0099 7.99996 17.6967 9.02777C18.3834 10.0556 18.75 11.2639 18.75 12.5001C18.7504 13.321 18.589 14.1339 18.275 14.8923C17.9611 15.6508 17.5007 16.3399 16.9203 16.9204C16.3398 17.5008 15.6507 17.9612 14.8922 18.2751C14.1338 18.5891 13.3208 18.7505 12.5 18.7501ZM12.5 8.33341C12.1281 8.33861 11.7586 8.39394 11.4015 8.49791C11.6958 8.89794 11.8371 9.39022 11.7996 9.88547C11.7621 10.3807 11.5484 10.8462 11.1972 11.1973C10.846 11.5485 10.3806 11.7623 9.88537 11.7997C9.39012 11.8372 8.89784 11.6959 8.49781 11.4016C8.27001 12.2408 8.31113 13.1303 8.61538 13.945C8.91962 14.7596 9.47167 15.4583 10.1938 15.9428C10.916 16.4272 11.7719 16.673 12.641 16.6456C13.5102 16.6181 14.3489 16.3188 15.039 15.7897C15.7291 15.2606 16.236 14.5285 16.4882 13.6963C16.7404 12.864 16.7253 11.9737 16.445 11.1505C16.1647 10.3273 15.6333 9.61277 14.9256 9.10742C14.2179 8.60207 13.3696 8.33137 12.5 8.33341Z" fill="black" />
                    </svg>
                </Box>
            </Box>
            <br />
            <br />

        </Box></div>
    )
}
