function isPalindrome(str){

    var replace_string = str.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

    var reverse_string = replace_string.split('').reverse().join('');


    return replace_string === reverse_string;

}



const testString2 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testString2));

