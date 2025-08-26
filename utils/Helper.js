export class Helper {


    randomTextGenerator (length) {
        var str = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";
        let output = "";

        for(let i=0;i<length;i++){
            const index = Math.floor(Math.random() * str.length);
            output+= str[index];
        }
        console.log(output);

        return output;

    }

}