import React from 'react'
import { useState } from 'react';
import moment from 'moment/moment';

import StepsInput from './StepsInput'
import EditStapsBlock from './EditStapsBlock';




export default function StepsForm() {
    const initialTable = [];
    const [table, setTable] = useState(initialTable);
    const [inputValues, setInputValues] = useState({
        date:'',
        dist:''
    })

    const redactTable = (row) =>{
        let tbl = table;
        if (tbl.length<=0){
            tbl.push(row);
            return tbl
        };
        for (let i =0; i<tbl.length; i++){
            if(tbl[i].date == row.date){
                tbl[i].dist +=row.dist
                return tbl
            };
        };
        tbl.push(row)
        return tbl
    };

    const sortTable = (tbl) =>{
        const sortTable = tbl.sort(function (a,b){ 
            if(Number(moment(a['date'],"DD.MM.YY")._d)<Number(moment(b['date'],"DD.MM.YY")._d)) {
                return -1;
            } if(Number(moment(a['date'],"DD.MM.YY")._d)>Number(moment(b['date'],"DD.MM.YY")._d)){
                return 1
            }
            return 0
        });
        return sortTable.reverse()
        
    };

    

    const handleRowChage = (row)=>{
        if(moment(row[0][0], "DD.MM.YY", true).isValid() && !isNaN(row[1][0])){      
            row = {
                date: row[0][0],
                dist: Number(row[1][0])
            };
        
            let tbl = redactTable(row);

            if (tbl.length>1){
                tbl = sortTable(tbl);
            };
        
            setTable([...tbl]);
        };
       
    };

    const handleRowDell = (obj)=>{

        if (obj['action'] == 'edit'){
            setInputValues({
                date:obj['key'],
                dist:obj['dist']
            });
        };

        let tbl = table;
        for (let i=0; i<tbl.length; i++){
            if(table[i].date == obj['key']){
                table.splice(i,1)
            };
        };
        setTable([...tbl]);
    };
    

  return (
    <div class='main-window'>
        <StepsInput onChange = {handleRowChage} values={inputValues}/>
        <div className="info">
            <div className="info-header">
                <label className='infoLabel'>Дата (ДД.ММ.ГГ)</label>
                <label className='infoLabel' >Пройдено км</label>
                <label className='infoLabel' >Действия</label>
            </div>
            <div className="data">
                <ul>
                    <EditStapsBlock table= {table} onChange = {handleRowDell} />
                </ul>
            </div>
        </div>
    </div>
  )
}






