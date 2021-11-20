import React from 'react';
import ReactDom from 'react-dom';
import { MainApp } from './Component/useContext/MainApp';

//import { TodoApp } from './Component/useReducer/TodoApp';
//import { Padre } from './Component/07-tarea-memo/Padre';
//import { CallBack } from './Component/memorize/CallBack';
//import { MemoHook } from './Component/memorize/MemoHook';
//import { Memorize } from './Component/memorize/Memorize';
//import { Layout } from './Component/layoutEffect.js/Layout';
//import { RealExample } from './Component/useRef/RealExample';
//import { FocusScreen } from './Component/useRef/FocusScreen';
//import { MultipleCustumHooks } from './Component/example/MultipleCustumHooks';
//import { todoAppReducer } from './Component/useReducer/todoAppReducer';
//import { FormWhitCustum } from './Component/useEffect/FormWhitCustum';
//import { SimpleForm } from './Component/useEffect/SimpleForm';

//import { CounterWhitCustomHook } from './Component/useState/CounterWhitCustomHook';
//import { CounterApp } from './Component/useState/CounterApp';
//import {HookApp} from './HookApp';

ReactDom.render(
    <MainApp></MainApp>,
    //<FormWhitCustum></FormWhitCustum>,
    //<MultipleCustumHooks></MultipleCustumHooks>,
    //<FocusScreen></FocusScreen>,
    //<RealExample></RealExample>,
    //<Layout></Layout>,
    //<Memorize></Memorize>,
    //<MemoHook></MemoHook>,
    //<CallBack></CallBack>,
    //<Padre></Padre>,
    document.getElementById('root')
    

);
