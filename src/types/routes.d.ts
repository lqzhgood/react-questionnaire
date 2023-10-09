import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

interface CustomRouteFields {
    name?: string;
}

type AppIndexRouteObject = IndexRouteObject & CustomRouteFields;
type AppNonIndexRouteObject = Omit<NonIndexRouteObject, 'children'> &
    CustomRouteFields & {
        children?: (AppIndexRouteObject | AppNonIndexRouteObject)[];
    };

export type RouteProps = AppIndexRouteObject | AppNonIndexRouteObject;
