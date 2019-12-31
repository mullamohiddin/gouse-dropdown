import React, {Component} from 'react';
import {Dropdown} from './Dropdown/Dropdown';
import {TieredMenu} from 'primereact/tieredmenu';
import {InputText} from 'primereact/inputtext';
import './App.css';
import styled from "styled-components";
import * as _ from 'lodash'
export class DropdownDemo extends Component {
    data = [
      {
         label:'File',
         icon:'pi pi-fw pi-file',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-plus',
               items:[
                  {
                     label:'Bookmark',
                     icon:'pi pi-fw pi-bookmark',
                     command:(e)=>{ this.onCarChange2(e)},
                  },
                  {
                     label:'Video',
                     icon:'pi pi-fw pi-video',
                     command:(e)=>{ this.onCarChange2(e)},
                  },
   
               ]
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-trash',
               command:(e)=>{ this.onCarChange2(e)}
            },
            {
               label:'Export',
               icon:'pi pi-fw pi-external-link',
               command:(e)=>{ this.onCarChange2(e)}
            }
         ]
      },
      {
         label:'Edit',
         icon:'pi pi-fw pi-pencil',
         items:[
            {
               label:'Left',
               icon:'pi pi-fw pi-align-left',
               command:(e)=>{ this.onCarChange2(e)}
            },
            {
               label:'Right',
               icon:'pi pi-fw pi-align-right',
               command:(e)=>{ this.onCarChange2(e)}
            },
            {
               label:'Center',
               icon:'pi pi-fw pi-align-center',
               command:(e)=>{ this.onCarChange2(e)}
            },
            {
               label:'Justify',
               icon:'pi pi-fw pi-align-justify',
               command:(e)=>{ this.onCarChange2(e)}
            },
   
         ]
      },
      {
         label:'Users',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',
               command:(e)=>{ this.onCarChange2(e)}
   
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',
               command:(e)=>{ this.onCarChange2(e)},
   
            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print',
                           command:(e)=>{ this.onCarChange2(e)},
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List',
                     command:(e)=>{ this.onCarChange2(e)},
                  }
               ]
            }
         ]
      },
      {
         label:'Events',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Save',
                     icon:'pi pi-fw pi-calendar-plus',
                     command:(e)=>{ this.onCarChange2(e)},
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-calendar-minus',
                     command:(e)=>{ this.onCarChange2(e)},
                  },
   
               ]
            },
            {
               label:'Archieve',
               icon:'pi pi-fw pi-calendar-times',
               items:[
                  {
                     label:'Remove',
                     icon:'pi pi-fw pi-calendar-minus',
                     command:(e)=>{ this.onCarChange2(e)},
                  }
               ]
            }
         ]
      },
      {
         label:'Quit',
         icon:'pi pi-fw pi-power-off',
         command:(e)=>{ this.onCarChange2(e)},
      }
  ];
    constructor() {
        super();
        this.state = {
            car2: 'BMW',
            car: null,
            items: this.data
        }
        this.onCarChange2 = this.onCarChange2.bind(this);
    }
 
    customFilter(val) {
       val = val instanceof Object ? [val] : val;
    var f =  this.filterTree(this.state.filter, val);
       return f;
    }

    componentDidMount() {
    this.setState({items: this.data});
  }
 filterTree = (filter, list) =>  {
  return _.filter(list, (item) => {
    if (item.items && item.items.length >0 ) {
      item.items = this.filterTree(filter, item.items);
      return !_.isEmpty(item.items);
    } else if (_.includes(_.toLower(item.label), _.toLower(filter))) {
      return true;
    }
  });
};
      onCarChange2(e) {
        this.setState({car2: e.item.label});
    }
        setGlobal(e) {
         const data = this.filterTree(e.target.value, this.state.items)
         this.setState({items: [...data]});
        }
    carTemplate(option) {
const optionArray = option instanceof Object ? [option] : option
            return (
              
                <TieredMenu  model={optionArray}>
            
                 </TieredMenu>
  
            );

    }

    render() {
        
const classNames = {
    container: 'p-tieredmenu',
    dropdownwrapper: 'p-dropdown-items-wrapper'
  }
  
const AutosuggestWrapper = styled.div.attrs(classNames)`
  .${classNames.container} {
    border: none !important;
  }
  .${classNames.dropdownwrapper} {
    overflow: inherit;
    max-height: 100% !important;
  }
  .p-highlight {
    background-color: white !important;
  }
  @media (min-width: 767px) {
   .p-dropdown {
      min-width:11.5em;
      font-size: 12px;
    }
    .p-inputtext {
      font-size: 12px;
    }
   .body {
     font-size: 8px;
   }
   .my-style {
   padding: 1%;
   border: 1px solid #a6a6a6;
   width: 30%;
   background: #a6a6a6;
   margin-left: 10%;
 }
 .p-component {
   font-size: 12px;
 }
 
 }
 
 @media (min-width: 400px) {
    .p-dropdown {
      min-width:11.5em;
      font-size: 12px;
    }
    .p-inputtext {
      font-size: 12px;
    }
   .body {
     font-size: 8px;
   }
   .my-style {
   padding: 1%;
   border: 1px solid #a6a6a6;
   width: 30%;
   background: #a6a6a6;
   margin-left: 10%;
 }
 .p-component {
   font-size: 12px;
 }
    }
   
`
     
return (
            <AutosuggestWrapper className="my-style">
               <div  className={this.props.className}>
                   <Dropdown  placeholder="Please Select"  value={this.state.car2} options={this.state.items} itemTemplate={this.carTemplate}
                    filterMatchMode="custom" 
                    filterElement={this.setGlobal}
                    filter={true} filterPlaceholder="Select Val" filterBy={this.customFilter}  showClear={true}
                               >
                    
                              </Dropdown>
                             
                    <div style={{marginTop: '.5em'}}>{this.state.car2 ? 'Selected : ' + this.state.car2 : 'No Val selected'}</div>
                </div>
               
                </AutosuggestWrapper>
        );
    }
}
export default DropdownDemo;