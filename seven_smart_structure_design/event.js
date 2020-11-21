class event_list
{
        

        pre_fetch(value,on)
        {
                
                $el("1:entry pre_fetch");
                try {
                        $L(`${value} ${on}`);
                        $().ptr=0;
                        $().abc=$().api[on](value)
                        $s().active=on;                        

                        // prn($().abc,$().abc.search("/?/") )
                        // if( $().abc.search("/?/") == -1 || $().abc.search("summary") != -1 )
                        // {
                        // $().abc+='?apiKey='
                        // $L(`1: ?  not found`);
                        // $s().active=on;
                        // } 
                        // else
                        // {
                        $().abc+='&apiKey='
                        // $L(`1: ? found`);
                        // }
                        // prn($().abc)
                        // window.ptr=0;
                        $().ptr=0
                        this.fetch(on)    
                        
                        $xl(`1:exit pre_fetch`)
                        return true
                } catch (error) {
                        $xl(`2:${error}`)
                        return false
                }
        }

        fetch(on)
        {
                // if(on<$().ptr)
                // {}

                $el("1:entry fetch");
                // prn(`${$().abc}${$().list_of_aut_key[$().ptr]}`)
                fetch(`${$().abc}${$().list_of_aut_key[$().ptr]}`)
                .then(ev=>{
                        prn(ev.url)
                        $s().done=false;
                        let abc=""
                        if(ev.status == 200)
                        {
                                $s().done=true;
                                
                                let to=$().o;
                                // prn(ev.url)
                                Object.entries(to).forEach(evl=>{

                                        // console.log(evl[0],ev.url.search(`${evl[0]}`))

                                        if(ev.url.search(`${evl[0]}`)!=-1)
                                        {
                                                // prn(evl[1])
                                        //         prn(evl)
                                                // prn('event')
                                        // setTimeout(ev=>__init__.EL[evl[1]](),100)
                                        // prn("done",evl[0]) 
                                                abc=evl[0];
                                    }
                                })
                                // prn('hey')
                                
                                // // $7()$s().active
                                // __init__.EL[to[$s().active]]()
                                // document.dispatchEvent(__init__.evt)
                                // __init__.EL.navigator_fetch_active_desider(on)
                                // $s()[abc]=);
                                // prn(ev.text())
                                let tosend={
                                        "key":abc,
                                        "value":ev.text()
                                }
                            
                                prn(tosend)
                                return tosend
                        // prn('hey bitches')
                        let buff=$s()[$s().active]=JSON.parse(`[${ev}]`);
                         

                        }
                        else if (ev.status == 401)
                        {
                                
                                setTimeout(ev=>{
                                       
                                        $().ptr+=1;
                                        __init__.EL.fetch()
                                        },100)
                                
                                
                        }
                        
                        
                })
                .then(ev=>{
                        // if($s().done)
                        // {
                        // $s()[$s().active]=JSON.parse(`[${ev}]`);        
                        
                        // }
                        prn(ev)
                        // let to=ev.key
                        // ev.value.then(
                        //         evl=>{
                        //                 prn('hmmmm')
                        //                 $s()[to]=JSON.parse(`${evl}`)
                        //                 __init__.EL[$().o[to]]()
                        //                 // setTimeout(ev1=>{__init__.EL[$().o[to]]()},50)
                        //         }
                        // )

                        

                })         
                // .catch(ev=>{})
                $xl(`1:exit fetch`)
        }       

        search_box(ev)
        {
                if($().enter_check==true)
                {
                        $().enter_check=false;
                
                }
                
                prn(ev.keyCode)
                if(ev.keyCode >=65 &&  ev.keyCode <=90 ||ev.keyCode >=48 && ev.keyCode <=57 || ev.keyCode ==8|| ev.keyCode ==13)
                {
                        $el("1:entry fetch");
                        // prn(ev.keyCode)
                        if(ev.key !="Enter"&& ev.key !="Backspace")
                        {       
                                // prn(ev.key,$qs('.search_box_inner').value)
                        $L( `1: no enter ${ev.key}`);
                        $s.buffer=$qs('.search_box_inner').value+ev.key
                        prn($s.buffer)
                        //     __init__.EL.pre_fetch($s.buffer,"smart_search")
                                
                        }
                        else
                        if (ev.key =="Enter")
                        {
                        $L( `1:  enter`)
                        prn('eter')
                        $().enter_check=true;
                        $().search_modal.style.display="none";
                        document.location.href+=`#${$s.buffer}`
                        $EE().on_enter();
                      $EE().send_bulk_id()          
                }
                        else
                        if (ev.key =="Backspace")
                        {
                        $L( `1:  backspace`)
                        $s.buffer=$qs('.search_box_inner').value
                        // prn($s.buffer)
                        }
                        
                        
                        if(__init__.out != undefined)
                        {

                        clearTimeout(__init__.out)        
                        // prn('cleared')
                        }
                        else if(__init__.out == undefined)
                        {
                        __init__.EL.search_modal()
                        
                        }
                        
                        __init__.out=setTimeout(__init__.EL.do_it_now,700)
                        $xl(`1:exit fetch`)
                }
        }
        do_it_now()
        {
                // prn("dit")
                if($s.buffer!="")
                {
                __init__.EL.pre_fetch($s.buffer,"smart_search")
                __init__.EL.search_modal()
                        
                }
        }

        navigator_fetch_active_desider(on)
        {
                let to={
                        "search":null,
                        "similar":null,
                        "smart_search":"search_modal",
                        "nutrition_widgit":null,
                        "ingrident_widgit":null,
                        "summary":null,
                        "cuisine":null,
                        "random":"trending_setup"
                }
                prn('hey')
                // // $7()$s().active
                // __init__.EL[to[$s().active]]()
                prn(on.url)
                
        }

        
        search_modal()
        {
        try {
                // prn($s().smart_search[0])
                if($().enter_check == false)
                {

                
                prn("search")
                $().search_modal.style.display="grid";
                $().search_modal.style.top=`${$().search_box_inner.parentElement.clientHeight}px`
                $().search_modal.style.width=`${$().search_box_inner.parentElement.clientWidth}px`
                $().search_modal.style.left= `${$().search_box_inner.offsetLeft}px`
                // $().search_modal.style.height="700px"
                let buffer=""
                $().search_path.style.display="none"
                $().cross_path.style.display="block";
                $().cross.style.display="block";
                
                // prn("hey",)
                try {
                        prn(Array.isArray($s().autocomplete[0]))
                        $s().autocomplete.forEach(ev=>{
                                prn(ev.title)
                                buffer+=` 
                                <div class="search_inner" onclick="id_setter('naad')" id="${ev.id}" >
                                <img src="https://spoonacular.com/recipeImages/${ev.id}-556x370.jpg" class="image_search_inner">
                                    <p class="dishes_name">${ev.title}</p>
                                </div>
                                `
                        })
               
                } catch (error) 
                        {
                                prn( error)
                        buffer+=`<div class="search_inner"  >
                        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" class="image_search_inner">
                                <p> no recipee found .....</p>
                        </div>`
                        $().search_modal.innerHTML=buffer;
                        // prn(buffer)
                        return false
                        
                }
                $().search_modal.innerHTML=buffer;
                $EE().callback_setup()
                // prn(buffer)
                return true
                }
                }
         catch (error)
                 {
                        // $().search_modal.style.display="none";
                        prn(error)
                        return false

                }
        }
        
        
        on_enter()
        {
                
                $().trending.style.display="none";
                $().search_modal.style.display="none";
                $().search_for.style.display="grid";//
                $().c.className+=" after_search" 
                let abc=document.location.hash.split('#');
                $().search_result_para.innerText=`Search result for ${abc[abc.length-1]}...`
                // $EE().send_bulk_id()
        }
        send_bulk_id()
        {
                try
                {let buffer=""
                let ptr=$s().autocomplete.length;
                let i=0;
                $s().autocomplete.forEach(ev=>{
                        buffer+=`${ev.id}`       
                        if(i != ptr-1)
                        {
                                buffer+=","
                                i=i+1;
                        }        
                })
                         prn(buffer)
                $EE().pre_fetch(buffer,"informationBulk")
                prn('sent bi')
                }
                catch(error)
                {
                        prn(error)
                }
        }
        after_enter()
        {
                let alpha=$qsA(".dish")
                let ptr=0;
                $s().smart_search[0].forEach(ev=>{
                                let abc=`<div class="dish"><div class="image">
                                
                                </div><div class="text before">
                                <div class="text-line"><p>${ev.title}</p></div>
                                <div class="text-line"></div>
                                <div class="text-line"></div>
                                <div class="text-line"></div>
                                <div class="text-line"></div>
                        </div></div>
                        ` 
                        alpha[ptr++].innerHTML=abc;                      
                })
                
                
        }
        back_to_home()
                {
                        $().trending.style.display="grid";
                        $().search_for.style.display="none";//grid
                        $().c.className="c"
                        document.location.hash=""
                        

        }

        informationBulk(ev)
        {
                
                prn($s().informationBulk)
        }
        trending_setup()
        {
                if(__init__.debug==false)
               {
                let ptr=0;
                setTimeout(ev=>{
                        //  prn($s().random)
                $s().random.forEach(ev=>{ev.recipes.forEach(ev=>{

                        let abc=`<div class="image" >
                        <img src="${ev.image}" 
                        style="width: inherit;
                        height: inherit;
                        border-radius:inherit;"
                         >
                
                    </div>
                    <div class="_text" id="${ev.id}">
                    <p class="dishes_name">${ev.title}
                        </p>
                    </div>`;
                        prn(abc)
                        $().inner_trending[ptr].display="grid";
                        
                        $().inner_trending[ptr].innerHTML=abc;
                        // if (ptr<4)
                        // {

                        //         let doit=false;

                        //         if(doit)
                        //         {
                                ptr+=1;
                        //         }
                        // }
                })
             })
                },1000)
               
        }

        }

        recipee_display_modal()
        {
                
                Object.entries($().c.children).forEach(ev=>{if(ev[1]!=$().c.lastElementChild){ev[1].style.display="none"}})
                $().c.className+=" recipeee_modal_c"
                // $().recipee_modal.style.top=`${$().c.offsetTop}px`
                // $().recipee_modal.style.width=`${$().c.offsetWidth}px`
                // $().recipee_modal.style.left= `${$().c.offsetLeft}px`
                // $().recipee_modal.style.height=`${$().c.offsetHeight}px`
                // $().recipee_modal.parentElement.style.display="block"
                // $().c.style.display="none";
                $().search_modal.style.display="none";
                
                
                // let abc=document.location.hash.split('#')
                // let gfh=abc.length;
                // // let abc=["check_bulk_available",["pre_fetch","id","information"]]
                // if($EE().check_bulk_available(abc[gfh-1])==false)
                // {
                //  $EE().pre_fetch(abc[gfh-1],"information")               
                // }
        }
        recipee_modal_data_adder()
        {
// border: solid #189ca2; set img border

        }

        graph_creator()
        {
                
        var ctx = document.getElementById('myChart').getContext('2d');
        // var chart = new Chart(ctx, {
        //     // The type of chart we want to create
        //     type: 'line',
        
        //     // The data for our dataset
        //     data: {
        //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //         datasets: [{
        //             label: 'My First dataset',
        //             backgroundColor: 'rgb(255, 99, 132)',
        //             borderColor: 'rgb(255, 99, 132)',
        //             data: [0, 10, 5, 2, 20, 30, 45]
        //         }]
        //     },
        
        //     // Configuration options go here
        //     options: {}
        // });
        



        var randomScalingFactor = function() {
                return Math.round(Math.random() * 100);
        };
        window.chartColors={blue: "rgb(54, 162, 235)",
        green: "rgb(75, 192, 192)",
        grey: "rgb(201, 203, 207)",
        orange: "rgb(255, 159, 64)",
        purple: "rgb(153, 102, 255)",
        red: "rgb(255, 99, 132)",
        yellow: "rgb(255, 205, 86)"}

        var config = {
                type: 'pie',
                data: {
                        datasets: [{
                                data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                ],
                                backgroundColor: [
                                        window.chartColors.red,
                                        window.chartColors.orange,
                                        window.chartColors.yellow,
                                        window.chartColors.green,
                                        window.chartColors.blue,
                                ],
                                label: 'Dataset 1'
                        }],
                        labels: [
                                'Red',
                                'Orange',
                                'Yellow',
                                'Green',
                                'Blue'
                        ]
                },
                options: {
                        responsive: true
                }
        };

        // window.onload = function() {
                // var ctx = document.getElementById('chart-area').getContext('2d');
                window.myPie = new Chart(ctx, config);
        // };





        
        // var ctx = document.getElementById('canvas').getContext('2d');
        // window.myBar = new Chart(ctx, {
        //         type: 'bar',
        //         data: barChartData,
        //         options: {
        //                 responsive: true,
        //                 legend: {
        //                         position: 'top',
        //                 },
        //                 title: {
        //                         display: true,
        //                         text: 'Chart.js Bar Chart'
        //                 }
        //         }
        // });

        // var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // var color = Chart.helpers.color;
        // var barChartData = {
        //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //         datasets: [{
        //                 label: 'Dataset 1',
        //                 backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        //                 borderColor: window.chartColors.red,
        //                 borderWidth: 1,
        //                 data: [
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor()
        //                 ]
        //         }, {
        //                 label: 'Dataset 2',
        //                 backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        //                 borderColor: window.chartColors.blue,
        //                 borderWidth: 1,
        //                 data: [
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor(),
        //                         randomScalingFactor()
        //                 ]
        //         }]

        // };

        

        

}
        table_ceator()
        {
                var tabledata = [
                        {id:1, name:"Oli Bob", progress:12},
                        {id:2, name:"Mary May", progress:1},
                        {id:3, name:"Christine Lobowski", progress:42},
                        {id:4, name:"Brendon Philips", progress:100},
                        {id:5, name:"Margret Marmajuke", progress:16},
                        {id:6, name:"Frank Harbours", progress:38},
                    ];
                    
                var table = new Tabulator(".basic_info_table", {
                        data:tabledata,           //load row data from array
                        layout:"fitColumns",      //fit columns to width of table
                        responsiveLayout:"hide",  //hide columns that dont fit on the table
                        tooltips:true,            //show tool tips on cells
                        addRowPos:"top",          //when adding a new row, add it to the top of the table
                        history:true,             //allow undo and redo actions on the table
                        pagination:"local",       //paginate the data
                        paginationSize:7,         //allow 7 rows per page of data
                        movableColumns:true,      //allow column order to be changed
                        resizableRows:true,       //allow row order to be changed
                        initialSort:[             //set the initial sort order of the data
                            {column:"name", dir:"asc"},
                        ],
                        columns:[                 //define the table columns
                            {title:"Name", field:"name", editor:"input"},
                            {title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:true},
                           
                        ],
                    });
        }
        check_bulk_available(id)
        {
                try{
                        $s().informationBulk.forEach(ev=>{
                                if(ev.id==id)
                                {
                                $s().recipee_for_modal=ev
                                        return true
                                }
                        })
                        return false
                }
                catch(err){

                        console.log(err)
                        return false
                }
                
        }
        back_to_home_recipee()
        {
                // $().c.style.display="grid";
        }
        
        cross(ev)
        {
                $().search_box_inner.value="";
                $().search_modal.style.display="none";
                $().search_path.style.display="block"
                $().cross_path.style.display="none";
                
        }
        mouse_cross()
        {
                $().cross.onmouseenter=ev=>{$().cross.style.stroke="black";}
                $().cross.onmouseleave=ev=>{$().cross.style.stroke="#189ca2b8";}
                $().rm.onmouseenter=ev=>{$().home.style.stroke="black";
                                        $().home.style.fill="black"}
                $().rm.onmouseleave=ev=>{$().home.style.stroke="#189ca2b8" ;
                                        $().home.style.fill="#189ca2b8"}
        
                $().share.onmouseenter=ev=>{$().share_svg.style.stroke="black";
                                                $().share_svg.style.fill="black"}
                $().share.onmouseleave=ev=>{$().share_svg.style.stroke="#189ca2b8";
                                                $().share_svg.style.fill="#189ca2b8"}
                                
                                }
       
        mode_setter()
        {
                let mode_function={
                        1:"",
                        2:"on_enter",
                        3:"recipee_display_modal"
                }

                if(document.location.hash.length==0)
                {
                        $().mode=1;
                        return true;
                }
                else if(document.location.hash.length>0)
                {
                        let abc=document.location.hash.split('#')
                        let gfh=abc.length;
                        if(abc[gfh-1].search('id=') != -1)
                        {
                                $().mode=3;
                                $EE()[mode_function[3]]()
                                return true;
                        }
                        else
                        {
                                $().mode=2;
                                $EE()[mode_function[2]]()
                                return true;
                        }
                       
                }

        }
        id_setter(ev)
        {
                // prn('hey',arguments)
        //        prn(ev.path[1])
        document.location.hash+=`#id=${ev.path[1].id}` 
        $EE().mode_setter()
        }
        callback_setup()
        {
                $qsA(".search_inner").forEach(ev=>{
                        ev.addEventListener("click",$EE().id_setter)
                })
        }

        upper_box()
        {
                return true
        }

        table_ceator_2()
        {
                var cheeseData = [
                        {id:1, type:"Brie", rind:"mould", age:"4 weeks", color:"white", image:"http://tabulator.info/sample_data/row_formatter/brie.jpg"},
                        {id:2, type:"Cheddar", rind:"none", age:"1 year", color:"yellow", image:"http://tabulator.info/sample_data/row_formatter/cheddar.jpg"},
                        {id:3, type:"Gouda", rind:"wax", age:"6 months", color:"cream", image:"http://tabulator.info/sample_data/row_formatter/gouda.jpg"},
                        {id:4, type:"Swiss", rind:"none", age:"9 months", color:"yellow", image:"http://tabulator.info/sample_data/row_formatter/swiss.jpg"},
                    ]
                    
                    //define Tabulator
                    var table = new Tabulator(".table_ingrident", {
                        height:"311px",
                        layout:"fitColumns",
                        resizableColumns:false,
                        data:cheeseData,
                        columns:[
                            {title:"<h1>INGREDIENTS</h1>", field:"type", sorter:"string"},
                        ],
                        rowFormatter:function(row){
                            var element = row.getElement(),
                            data = row.getData(),
                            width = element.offsetWidth,
                            rowTable, cellContents;
                    
                            //clear current row data
                            while(element.firstChild) element.removeChild(element.firstChild);
                    
                            //define a table layout structure and set width of row
                            var rowTable = document.createElement("table")
                            rowTable.style.width = (width - 18) + "px";
                    
                            var rowTabletr = document.createElement("tr");
                    
                            //add image on left of row
                            var cellContents = "<td><img src='/sample_data/row_formatter/" + data.image + "'></td>";
                    
                            //add row data on right hand side
                            cellContents += "<td><div><strong>Type:</strong> " + data.type + "</div><div><strong>Age:</strong> " + data.age + "</div><div><strong>Rind:</strong> " + data.rind + "</div><div><strong>Colour:</strong> " + data.color + "</div></td>"
                    
                            rowTabletr.innerHTML = cellContents;
                    
                            rowTable.appendChild(rowTabletr);
                    
                            //append newly formatted contents to the row
                            element.append(rowTable);
                        },
                    });
        }


}


let event_tester=
{
        // "function_name":{
        //         "input":"expected_output"
        //                 or
        //                ["output","soem condition of variable":expected]
        //                pre_1:ev=>{}  
        // }
}



export default event_list;