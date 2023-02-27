//條件式

// if...
let x = 'asdf';
if(x > 0){
    console.log('success');
}

// if...else
if(x > 0){
    console.log('success 2');
}else{
    console.log('error 2');
}

// if...else if
if(x > 0){
    console.log('正數');
}else if(x < 0){
    console.log('負數');
}

// if..else if...else
if(x > 0){
    console.log('正');
}else if(x < 0){
    console.log('負');
}else{
    console.log(0)
}

// switch
switch(x){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
switch(true){
    case x > 0:
        console.log('大');
        break;
    case x < 1:
        console.log('小');
        break;
    default:
        console.log('!!');
}