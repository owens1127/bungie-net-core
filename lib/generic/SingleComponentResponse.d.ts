import { ComponentData, ComponentResponse } from './ComponentTypes';
export interface SingleComponentResponse<C extends ComponentData> extends ComponentResponse<C> {
}
