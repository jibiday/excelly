import {Excelly} from '@core/Excelly';
import {Header} from './components/header/Header';
import '@/styles/style.scss';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';

const excelly = new Excelly();
excelly.bootstrap([Header, Toolbar, Formula]);
