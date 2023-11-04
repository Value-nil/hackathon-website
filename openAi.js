const {OpenAI} = require("openai");
const openai = new OpenAI({
  apiKey: ""
});
async function main(){
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: "Say this is an example"
            }
        ]
    })
    console.log(completion.choices[0].message.content);
}

module.exports = {main};

return main;