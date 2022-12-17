function intentMap(num) {
    if(num==0){
        return "Commercial"
    }
    else if(num==1){
        return "Informational"
    }
    else if(num==2){
        return "Navigational"
    }
    else if(num==3){
        return "Transactional"
    }
    else{
      return none;
    }
  };

  export default intentMap