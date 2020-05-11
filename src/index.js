import {Excelly} from './core/Excelly';
import {Header} from './components/header/Header';
import '@/styles/style.scss';

const excelly = new Excelly();
excelly.bootstrap([Header]);
