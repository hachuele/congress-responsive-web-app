<?php

    //Allow all origins
    header('Access-Control-Allow-Origin: *');

    //DOWNLOAD ALL LEGISLATOR DATA BY STATE
    if($_GET['action'] == "downloadLegislators"){
        
        //WEBSTRING TO REQUEST ALL LEGILATORS INFORMATION
        $webString = "https://congress.api.sunlightfoundation.com/legislators?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&per_page=all";
        //http://104.198.0.197:8080/legislators?&per_page=all
        //$webString = "http://104.198.0.197:8080/legislators?&per_page=all";
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);\
        header('Content-type: application/json');
        echo $encodedNewArray;

    }
    
    //DOWNLOAD ALL BILLS DATA
    else if($_GET['action'] == "downloadBills"){
        
        //WEBSTRING TO REQUEST ALL BILL INFORMATION
        $webString = "https://congress.api.sunlightfoundation.com/bills?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&per_page=50";
        
        //$webString = "http://104.198.0.197:8080/bills?&per_page=50";
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);
        header('Content-type: application/json');
        echo $encodedNewArray;

    }

    //DOWNLOAD ALL COMMITTEE DATA
    else if($_GET['action'] == "downloadCommittees"){
        
        //WEBSTRING TO REQUEST ALL COMMITTEE INFORMATION
        $webString = "https://congress.api.sunlightfoundation.com/committees?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&per_page=all";
        //$webString = "http://104.198.0.197:8080/committees?&per_page=all";
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);
        header('Content-type: application/json');
        echo $encodedNewArray;

    }

//END OF MAIN REQUESTS



/*******************************

VIEW DETAILS SECTION

*******************************/

    //BILL DETAILS REQUEST FOR SPECIFIC BILL_ID
    else if($_GET['action'] == "downloadBillsForBill"){
        
        $billID = $_GET['billID'];
        
        //WEBSTRING TO REQUEST BILL INFORMATION FOR SPECIFIED BILL_ID
        $webString = "https://congress.api.sunlightfoundation.com/bills?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&bill_id=".$billID;
        //$webString = "http://104.198.0.197:8080/bills?bill_id=".$billID;
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);
        header('Content-type: application/json');
        echo $encodedNewArray;

    }



    //LEG DETAILS REQUEST FOR SPECIFIC BIOGUIDE ID (LEG DETAILS)
    else if($_GET['action'] == "downloadLegForLegDetails"){
        
        $bioguideID = $_GET['bioguideID'];
        
        //WEBSTRING TO REQUEST BILL INFORMATION FOR SPECIFIED BILL_ID
        $webString = "https://congress.api.sunlightfoundation.com/bills?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&bill_id=".$billID;
        //$webString = "http://104.198.0.197:8080/legislators?&bioguide_id=".$bioguideID;
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);
        header('Content-type: application/json');
        echo $encodedNewArray;

    }



    //BILL DETAILS REQUEST FOR SPECIFIC BIOGUIDE ID (LEG DETAILS)
    else if($_GET['action'] == "downloadBillForLegDetails"){
        
        $bioguideID = $_GET['bioguideID'];
        
        //WEBSTRING TO REQUEST BILL INFORMATION FOR SPECIFIED BILL_ID
        $webString = "https://congress.api.sunlightfoundation.com/bills?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&bill_id=".$billID;
        //$webString = "http://104.198.0.197:8080/bills?per_page=5&sponsor_id=".$bioguideID;
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);
        header('Content-type: application/json');
        echo $encodedNewArray;

    }


    //COMM DETAILS REQUEST FOR SPECIFIC BIOGUIDE ID (LEG DETAILS)
    else if($_GET['action'] == "downloadCommForLegDetails"){
        
        $bioguideID = $_GET['bioguideID'];
        
        //WEBSTRING TO REQUEST BILL INFORMATION FOR SPECIFIED BILL_ID
        $webString = "https://congress.api.sunlightfoundation.com/bills?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&bill_id=".$billID;
        //$webString = "http://104.198.0.197:8080/committees?per_page=5&member_ids=".$bioguideID;
        $array = file_get_contents($webString);
        $encodedNewArray = json_encode($array);
        header('Content-type: application/json');
        echo $encodedNewArray;

    }




//http://104.198.0.197:8080/committees?per_page=5&member_ids=


//legDetailsbills: https://congress.api.sunlightfoundation.com/bills?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&per_page=5&sponsor_id=B000711
 //   legDetailsComm: https://congress.api.sunlightfoundation.com/committees?apikey=dfbc7131ab4240338f3ac0d8bb9adcd6&per_page=5&member_ids=B000711





?>