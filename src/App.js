import './App.css';
const textToImage = require('text-to-image');

function App() {

  const buttonClickHandler = () => {

    var text_list = document.getElementById("text_list").value.split(",")
    var maxWidth = 800;

    // console.log (document.getElementById("text_to_image").value);

    var text_to_image_config = JSON.parse(document.getElementById("text_to_image").value)
    text_to_image_config['maxWidth'] = maxWidth;

    var images = [];
    for (var i=0; i<text_list.length; i++) {
      var image = textToImage.generateSync(text_list[i], text_to_image_config);
      images.push(image)

      // var x = document.createElement('img');
      // x.src = image;
      // document.getElementById("debug").appendChild(x)
    }

    var gitshot_config = JSON.parse(document.getElementById("gitshot_config").value)
    gitshot_config['gifWidth'] = maxWidth;
    gitshot_config['images'] = images

    // console.log (images);

    window.gifshot.createGIF(gitshot_config, function (obj) {
        if (!obj.error) {
            var animatedImage = document.getElementById("animatedImage")
            animatedImage.src = obj.image;

            var downloadLink = document.getElementById("downloadLink")
            downloadLink.style.display = "block"
            downloadLink.href = obj.image;
        }
    });


  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>Text</h3>
            <textarea className="col-12" rows={15} id="text_list" defaultValue="Thank you,Dankie,Faleminderit,አመሰግናለሁ,شكرا لك,Շնորհակալություն,Çox sağ ol,ধন্যবাদ,Eskerrik asko,Дзякуй,Hvala ti,Благодаря ти,ကျေးဇူးတင်ပါတယ်,Gràcies,Salamat,谢谢,謝謝,Grazie,Hvala vam,Děkuji,tak skal du have,Dank je,Dankon,aitäh,Salamat,Kiitos,Je vous remercie,grazas,Dankeschön,ευχαριστώ,આભાર,mèsi,na gode,mahalo,धन्यवाद,ua tsaug,köszönöm,Þakka þér fyrir,Daalụ,Terima kasih,go raibh maith agat,grazie,ありがとうございました,matur nuwun,ಧನ್ಯವಾದಗಳು,Рақмет сізге,សូមអរគុណ,Murakoze,감사합니다,Spas dikim,Рахмат сага,ຂອບ​ໃຈ,Gratias tibi,Paldies,Ačiū,Merci,Ви благодарам,Misaotra anao,Terima kasih,നന്ദി,Grazzi,Mauruuru,धन्यवाद,Баярлалаа,धन्यवाद,Takk skal du ha,Zikomo,ଧନ୍ୟବାଦ,مننه,متشکرم,Dziękuję Ci,Obrigado,ਤੁਹਾਡਾ ਧੰਨਵਾਦ,Mulțumesc,Спасибо,faafetai,Tapadh leat,Хвала вам,Ndatenda,توهان جي مهرباني,ඔබට ස්තුතියි,Ďakujem,Hvala vam,Mahadsanid,kea leboha,Gracias,hatur nuhun,Asante,Tack,сипос,நன்றி,Рәхмәт,ధన్యవాదాలు,ขอขอบคุณ,teşekkür ederim,Sagbol,Дякую,شکریہ,رەھمەت سىزگە,rahmat,Cảm ơn bạn,Diolch,Dankewol,Enkosi,אדאנק,e dupe,Ngiyabonga">
            </textarea>

            <h3>TexttoImage Config</h3>
            <textarea className="col-12" rows={10} id="text_to_image" defaultValue='{"textAlign": "center", "fontFamily": "Helvetica Neue", "fontSize": 60, "customHeight": 70}'>
            </textarea>

            <h3>Gitshot Config </h3>
            <textarea className="col-12" rows={10} id="gitshot_config" defaultValue='{"gifHeight":90,"interval":0.5,"numFrames":20,"frameDuration":1,"fontWeight":"normal","fontSize":"16px","fontFamily":"sans-serif","fontColor":"#ffffff","textAlign":"center","textBaseline":"bottom","sampleInterval":10,"numWorkers":2}'>
            </textarea>
            <button onClick={ () => buttonClickHandler() }>Generate Image</button>
          </div>
          <div className="col-8 rightPage" id="gifImage">
            <button onClick={ () => buttonClickHandler() }>Generate Image</button><br/>
            <img id="animatedImage"></img>
            <div id="debug"></div>
            <center><a id="downloadLink" className="hidden" download="image.gif">Download Image</a></center>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default App;
