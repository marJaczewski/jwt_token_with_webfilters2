package mariuszjaczewski.jwt_token_with_webfilters;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ViewController   {

    @GetMapping("/indexc")
    public String returnIndex(){
    System.out.println("index.html");
        return "index.html";
    }

 }




