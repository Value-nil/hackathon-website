const {OpenAI} = require("openai");
const openai = new OpenAI({
  apiKey: "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"
});
async function callAi(request){
    console.log(request);
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: request
            }
        ]
    })
    console.log(completion.choices[0].message.content)
    return completion.choices[0].message.content;
}

module.exports = {callAi};
return module.exports;