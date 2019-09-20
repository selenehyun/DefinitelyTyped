import Fin from './api/fin';
import { Application } from './api/application/application';
import { _Window as Window } from './api/window/window';
import { _Frame as Frame } from './api/frame/frame';
import { _Notification as Notification } from './api/notification/notification';
import System from './api/system/system';
import { ConnectConfig } from './transport/wire';
export declare function connect(config: ConnectConfig): Promise<Fin>;
export declare function launch(config: ConnectConfig): Promise<number>;
export { Identity } from './identity';
export { Fin, Application, Window, System, Frame, Notification };
