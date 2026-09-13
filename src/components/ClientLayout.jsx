'use client';

import React, { Suspense } from 'react';
import Navbar from './Navbar';
import ScrollToHash from './ScrollToHash';

const ClientLayout = ({ children }) => (
    <>
        <Suspense fallback={null}>
            <ScrollToHash />
        </Suspense>
        <Navbar />
        <main>{children}</main>
    </>
);

export default ClientLayout;
