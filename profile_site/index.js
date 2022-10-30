function get(){
    const answerElement=document.getElementById('answer');
    answerElement.style.display='block'
    const question = document.forms['question'];
    
    const name=question.elements.name.value;
    document.getElementById('ikeda').innerText=name
    const height=question.elements.height.value;
    document.getElementById('height_a').innerText=height
    const belief=question.elements.belief.value;
    document.getElementById('belief_a').innerText=belief
    const bloodtype=question.elements.bloodtype.value;
    document.getElementById('bloodtype_a').innerText=bloodtype
    const history=question.elements.history.value;
    document.getElementById('history_a').innerText=history
    const awords=question.elements.awords.value;
    document.getElementById('awords_a').innerText=awords
    const from=question.elements.from.value;
    document.getElementById('from_a').innerText=from
    const sns=question.elements.sns.value;

    const ikephoto=question.elements.ikephoto.value;
    const photo=question.elements.ikephoto.files;

    

    const questionElement=document.getElementById('question');
    questionElement.style.display='none'
    
    if(photo.length){
        const url=URL.createObjectURL(photo[0]);
    
    // answerElement.style.backgroundImage='linear-gradient(black, black),url(' + url + ')'
    answerElement.style.backgroundImage='url(' + url + ')'
    }
    
   
  }
  