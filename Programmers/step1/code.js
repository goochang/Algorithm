function solution(arr, divisor) {
    var answer = [];
    
    // 나누어 떨어지는 값만 배열에 저장
    for(var i=0;i<=arr.length;i++){
        if(arr[i] % divisor == 0){
            answer.push(arr[i]);
        }
    }
    
    // 저장된 값이 없는 경우 -1만 리턴
    if(answer.length == 0){ 
        answer.push(-1);
    } else {
        // 오름차순 정렬
        answer.sort(function(a, b) {
          return a - b;
        });
    }
    return answer;
}
