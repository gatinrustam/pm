import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Path } from './common/js/consts.js';

import Dashboard from "./components/Dashboard/Dashboard";
import Forms from "./components/Forms/Forms";
import CreateForm from "./components/Forms/components/CreateForm/CreateForm";
import FormList from "./components/Forms/components/FormList/FormList";
import Pages from "./components/Pages/Pages";
import Buttons from "./components/Buttons/Buttons";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import NotFound from "./components/common/NotFound/NotFound";
import Auth from "./components/Auth/Auth";
import Support from "./components/Support/Support";

import Menu from './components/Menu/Menu';


export const useRoutes = (isAuthentiated) => {
    if (isAuthentiated) {
        return (
            <>
                <Menu />
                <Routes>
                    <Route path={Path.default} element={<Dashboard />} />
                    <Route path={Path.forms} element={<Forms />}>
                        <Route path={Path.formCreate} element={<CreateForm />} />
                        <Route path={Path.formAll} element={<FormList />} />
                    </Route>
                    <Route path={Path.pages} element={<Pages />} />
                    <Route path={Path.buttons} element={<Buttons />} />
                    <Route path={Path.analytics} element={<Analytics />} />
                    <Route path={Path.settings} element={<Settings />} />
                    <Route path={Path.support} element={<Support />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </>
        );
    }

    return (
        <Routes>
            <Route path={Path.default} element={<Auth type="auth" />} />
            <Route path={Path.recovery} element={<Auth type="recovery" />} />
            <Route path={Path.support} element={<Support />} />
            <Route
                path="*"
                element={<Navigate to={Path.default} replace />}
            />
        </Routes>
    );
};
