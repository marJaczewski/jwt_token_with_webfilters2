package mariuszjaczewski.jwt_token_with_webfilters.service;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
public class DataController {


    @RequestMapping(value = "/someGet", method = RequestMethod.GET)
    public List<String>getMessage(){
        System.out.println("Wysłano");

        List<String> message=new ArrayList<>();

        message.add("no siema");
        return message;

    }
    @RequestMapping(value = "/someGet2", method = RequestMethod.GET)
    public List<String>getMessage2(){
        System.out.println("Wysłano");

        List<String> message=new ArrayList<>();

        message.add("no siema");
        return message;

    }

}
