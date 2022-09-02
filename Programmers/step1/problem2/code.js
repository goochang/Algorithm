function solution(phone_number) {
    var answer = '';
 
    // 뒤에 4자리 제외 값
    var front = phone_number.substr(0, phone_number.length -4);
    // 뒤에 4자리
    var back = phone_number.substr(-4)
    
    var star = "";
    // 앞자리 만큼의 별
    for(var i=0;i<front.length;i++){
        star += "*";
    }
    
    // 별 + 뒷자리
    return star+back;
}
