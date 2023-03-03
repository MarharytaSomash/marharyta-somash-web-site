import { ReactNode } from "react";

export type navigationType = {
    id: number;
    title: string;
    path: string;
};

export type social_dataType = {
    link: string;
    className: string;
    icon: string;
};

export type SocailItemWrapperType = {
    route: string;
    children: React.ReactNode;
};
export type skillsType = {
    name: string;
    done: string;
}[];

export type toggleType = {
    toggle: boolean;
};

export type LayoutProps = {
    children: ReactNode;
};

export type ProgressBarProps = {
    done: number;
};

export type Action = {
    type: string;
    payload: unknown;
};
export type ErrorType = {
    type: string;
    payload: unknown;
};
export type MenuBurgerType = {
    type: string;
    payload: boolean;
};
