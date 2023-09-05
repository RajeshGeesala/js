const employees = [
    {
        emp_name: 'Manohar Lotlapalli',
        emp_age : 31,
        emp_address : 'Hydrabad',
        gender : 'male',
        designation : 'manager',
        salary : 20000000,
        doj : '2019-march',
        laptop_assign : true,
        emp_helth_insu : 7500000,
        Status_of_employee : "inactive" ,
    },
    {
        emp_name: 'Madhu',
        emp_age : 38,
        emp_address : 'Kerala',
        gender : 'female',
        designation : 'GM',
        salary : 25000000,
        doj : '2016-july',
        laptop_assign : true,
        emp_helth_insu : 8500000,
        Status_of_employee : "active"
    },
    {
        emp_name: 'Prasadu Elaprolu',
        emp_age : 28,
        emp_address : 'Vijayawada',
        gender : 'male',
        designation : 'Software Engineer',
        salary : 1300000,
        doj : '2018-october',
        laptop_assign : true,
        emp_helth_insu : 350000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Manisha',
        emp_age : 25,
        emp_address : 'Vizagpattanam',
        gender : 'female',
        designation : 'Web develope',
        salary : 1000000,
        doj : '2021-april',
        laptop_assign : true,
        emp_helth_insu : 250000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Kavith',
        emp_age : 35,
        emp_address : 'Warangal',
        gender : 'female',
        designation :  'manager',
        salary : 18000000,
        doj : '2017-june',
        laptop_assign : true,
        emp_helth_insu : 6500000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Ashok',
        emp_age : 24,
        emp_address : 'Chennai',
        gender : 'male',
        designation : 'Project Engineer',
        salary : 600000,
        doj : '2022-january',
        laptop_assign : false,
        emp_helth_insu : 200000,
        Status_of_employee : 'inactive'

    },
    {
        emp_name: 'Siva',
        emp_age : 30,
        emp_address : 'Kadapa',
        gender : 'male',
        designation : 'Senior Project Engineer',
        salary : 1400000,
        doj : '2017-may',
        laptop_assign : false,
        emp_helth_insu : 500000,
        Status_of_employee : 'inactive'

    },
    {
        emp_name: 'Sreenu',
        emp_age : 32,
        emp_address : 'Nellur',
        gender : 'male',
        designation : 'teamlead',
        salary : 1800000,
        doj : '2015-may',
        laptop_assign : false,
        emp_helth_insu : 6500000,
        Status_of_employee : 'inactive'

    },
    {
        emp_name: 'Venkat',
        emp_age : 29,
        emp_address : 'Tirupathi',
        gender : 'male',
        designation : 'Sr Software Engineer',
        salary : 1400000,
        doj : '2019-october',
        laptop_assign : true,
        emp_helth_insu : 400000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Hrithika',
        emp_age : 25,
        emp_address : 'Maharashtra',
        gender : 'female',
        designation : 'System Engineer',
        salary : 1000000,
        doj : '2018-october',
        laptop_assign : true,
        emp_helth_insu : 450000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Anil',
        emp_age : 23,
        emp_address : 'Tirupathi',
        gender : 'male',
        designation : 'Software Engineer',
        salary : 400000,
        doj : '2023-october',
        laptop_assign : false,
        emp_helth_insu : 300000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Laxmi',
        emp_age : 30,
        emp_address : 'Vijayawada',
        gender : 'male',
        designation : 'teamlead',
        salary : 1600000,
        doj : '2017-september',
        laptop_assign : true,
        emp_helth_insu : 750000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Jyothi',
        emp_age : 24,
        emp_address : 'Bangalore',
        gender : 'female',
        designation : 'HR',
        salary : 900000,
        doj : '2019-february',
        laptop_assign : true,
        emp_helth_insu : 400000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Vamsi',
        emp_age : 24,
        emp_address : 'Guntr',
        gender : 'male',
        designation : 'Executive',
        salary : 400000,
        doj : '2022-december',
        laptop_assign : false,
        emp_helth_insu : 200000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Ramu',
        emp_age : 33,
        emp_address : 'Eluru',
        gender : 'male',
        designation : 'manager',
        salary : 1900000,
        doj : '2011-may',
        laptop_assign : true,
        emp_helth_insu : 800000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Thejaswini',
        emp_age : 25,
        emp_address : 'Guntr',
        gender : 'female',
        designation : 'Senior Consultant',
        salary : 1500000,
        doj : '2020-june',
        laptop_assign : true,
        emp_helth_insu : 600000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Umesha',
        emp_age : 27,
        emp_address : 'Delhi',
        gender : 'male',
        designation : 'Technologist',
        salary : 1400000,
        doj : '2021-december',
        laptop_assign : true,
        emp_helth_insu : 500000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'shini',
        emp_age : 25,
        emp_address : 'Guntr',
        gender : 'female',
        designation : 'Senior Administrator',
        salary : 700000,
        doj : '2017-may',
        laptop_assign : true,
        emp_helth_insu : 300000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Vivitha',
        emp_age : 27,
        emp_address : 'chennai',
        gender : 'female',
        designation : 'Senior quality',
        salary : 1200000,
        doj : '2017-july',
        laptop_assign : true,
        emp_helth_insu : 400000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Kumar',
        emp_age : 25,
        emp_address : 'Hyd',
        gender : 'male',
        designation : 'manager',
        salary : 2300000,
        doj : '2016-june',
        laptop_assign : true,
        emp_helth_insu : 900000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Deepu',
        emp_age : 25,
        emp_address : 'pune',
        gender : 'female',
        designation : 'Administrator',
        salary : 700000,
        doj : '2019-october',
        laptop_assign : true,
        emp_helth_insu : 300000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Mohan',
        emp_age : 25,
        emp_address : 'Bangalore',
        gender : 'male',
        designation : 'Senior engineer',
        salary : 700000,
        doj : '2017-may',
        laptop_assign : true,
        emp_helth_insu : 300000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Rmesh',
        emp_age : 25,
        emp_address : 'Guntr',
        gender : 'male',
        designation : 'Senior Project Engineer',
        salary : 1100000,
        doj : '2019-september',
        laptop_assign : true,
        emp_helth_insu : 400000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Uday',
        emp_age : 24,
        emp_address : 'Vijayawada',
        gender : 'male',
        designation : 'Executive',
        salary : 420000,
        doj : '2022-January',
        laptop_assign : false,
        emp_helth_insu : 220000,
        Status_of_employee : 'Active'

    },
    {
        emp_name: 'Sunitha',
        emp_age : 28,
        emp_address : 'Pune',
        gender : 'female',
        designation : 'Administrator',
        salary : 1200000,
        doj : '2020-augset',
        laptop_assign : true,
        emp_helth_insu : 500000,
        Status_of_employee : 'Active'

    }
    
];   
const newEmp1 =     {
    emp_name: 'New Employee 1',
    emp_age : 28,
    emp_address : 'Pune',
    gender : 'female',
    designation : 'Administrator',
    salary : 1200000,
    doj : '2020-augset',
    laptop_assign : true,
    emp_helth_insu : 500000,
    Status_of_employee : 'Active'

} ;
const newEmp2 =
{
    emp_name: 'NewEmployee2',
    emp_age : 28,
    emp_address : 'Pune',
    gender : 'female',
    designation : 'Administrator',
    salary : 1200000,
    doj : '2020-augset',
    laptop_assign : true,
    emp_helth_insu : 500000,
    Status_of_employee : 'Active'

} 

    console.log (employees) 


  const maleEmployees =  [ ] ;

            function getMaleEmployees ()
            {
               for( i = 0 ; i < employees.length ; i++)
              {
               if ( employees[i].gender == 'male')

               {    maleEmployees.push(employees[i]) }

               }
               console.log(maleEmployees)  ;
              
            } ;
  const FemaleEmployees = [] ;
  
function getFeMaleEmployees() 
{
    for ( i=0; i < employees.length ; i++)
    {
        if ( employees[i].gender == 'female' )
        {
            FemaleEmployees.push(employees[i])
        }
     
    }     console.log( FemaleEmployees ) ;
   
}

function get10_15employees_list ()
{
     const sliceEmployees = employees.slice(10,15) ;
     console.log(sliceEmployees) 
}
   const ActiveEmployess = []
function getStatusOfEmployee ()
{
    for(i=0 ; i<employees.length ; i++ )
    {  if (employees[i].Status_of_employee == 'Active')
    {
          ActiveEmployess.push(employees[i])
    }
           }
       console.log(ActiveEmployess)    
}

function ascendingList ()
   {
     
     console.log(employees.sort())
   } 

   
const managers = [] ;
function GetManagers() 
{
    for (i=0; i<employees.length ; i++) {
     if( employees[i].designation == 'manager' ) 
     {  managers.push(employees[i])  }
    }
    console.log(managers)
} 

function addHike()
{
  let hikedSalary = document.getElementById('hike').value ;
  let Salary6themployee = employees[6].salary ; 
  let newSalary = Number(hikedSalary)+Number(Salary6themployee) ;
  employees[6].salary = newSalary ;
  console.log(newSalary) ;
}


function add2Employyes (){
   

    employees.splice(2,0 , newEmp1 ,newEmp2) ;
    console.log(employees)
     
} ;
function GetEmployees() 
{
    console.log(employees)  ;
}  ;
 
  
function GetAllTeamLeads ()
{     let teamleads =[ ]
  for ( i=0 ; i  < employees.length ; i++ )   
  {  
    if ( employees[i].designation == 'teamlead' )
    {
        teamleads.push(employees[i])
    }
  } 
  console.log(teamleads) ;
}

//show employees salary details ;

function getsalary()
{      const pritnsalary = [] ;
    for (i=0 ; i<employees.length ; i++)
    {
        if ( employees[i].salary > 0  )
        {
          pritnsalary.push(  { 'employee name ' : employees[i].emp_name , 'Employee Salary' : employees [i].salary })
        }
    }
    console.log(pritnsalary) ;
};

function healthInsurance ()
{    let healthinsurance = [] ;
    for (i=0 ; i<employees.length ; i++)
    {
        if (employees[i].emp_helth_insu > 0 )
        {   healthinsurance.push( { "name" : employees[i].emp_name ,"health insurance" : employees[i].emp_helth_insu } )  }
    } 
    console.log(healthinsurance)
}  ;


// function for laptop assigned 
      let laptop = [] ;
      let nolaptop = []   ;
    function LaptopAssigned ()
    {
        for (i=0 ; i < employees.length ; i++)
        {
            if ( employees[i].laptop_assign  == true)
            {   laptop.push( { "employeename" : employees[i].emp_name , "laptopassigned" : employees[i].laptop_assign })   }
            else 
            {  nolaptop.push (   {"employeename" : employees[i].emp_name , "laptopassigned" : employees[i].laptop_assign   }  )          }
        
        }

        console.log(laptop)
        console.log(nolaptop)
    }
    // function remove employee at 15th position 

    function removeEmployee
    ()
    {
        employees.splice( 26 , 5  )    }