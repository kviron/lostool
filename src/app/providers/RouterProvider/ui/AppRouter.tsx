import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {
                Object.values(RouteConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
