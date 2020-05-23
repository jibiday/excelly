import {Excelly} from '@core/Excelly';
import {Header} from './components/header/Header';
import '@/styles/style.scss';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const excelly = new Excelly();
excelly.bootstrap([Header, Toolbar, Formula, Table]);
