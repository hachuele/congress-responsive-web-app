/**
External JavaScript Script for Homework 8: Responsive Web Design
*/

//Function to collapse vertical navigation bar on click of navigation icon
$(document).ready(function(){
    $("#navIconHeader").click(function(){
        
        if($("#verticalNavBar").is(":hidden")){
            $("#verticalNavBar").show();
        }
        else{
            $("#verticalNavBar").hide();
        }
    });
});


var app = angular.module("myApp", ['angularUtils.directives.dirPagination']);

//APPLICATION FILTERS -DISTRICT FILTER
    app.filter('districtFilter', function(){
        
        return function(input){
            if(input == null){
                return "N.A";
            }
            else{
                return "District "+input;
            }
            
        }
    });

//APPLICATION FILTERS -OFFICE FILTER
app.filter('officeFilter', function(){
        
        return function(input){
            if(input == null){
                return "N.A";
            }
            else{
                return input;
            }
            
        }
    });
 
//MAIN ANGULAR JS CONTROLLER
app.controller("firstController", function ($scope, $http) {
    
    //{"title":'All States',"id":''}
    //States scope Variable for Legislators Dropdown
    $scope.statesDropdown = 
    [{"AL": "Alabama","AK": "Alaska","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FL": "Florida","GA": "Georgia","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"}];
    
    //TERM MATH CALCULATIONS
    $scope.Term = function(termStart, termEnd){
            
            return (Math.round((Math.abs((new Date().getTime() - new Date(termStart).getTime()))/(24*60*60*1000))/(Math.abs((new Date(termEnd).getTime() - new Date(termStart).getTime())/(24*60*60*1000)))*100))+"%";
    }
    
    
    
    //INITIALIZE FAVORITES ARRAYS FOR LOCAL STORAGE
    
    $scope.localDataLeg = [];
    $scope.localDataBill = [];
    $scope.localDataComm = [];
    
    
    //YELLOW STAR FUNCTION
    $scope.isYellowComm = function(committeeID){
        
        $scope.commdataForStars = committeeID;
        
        if(JSON.parse(window.localStorage.getItem("committeeDetailsFavorites")) == null){
            return false;
        }
    
        else{
            $scope.localDataCommFav = JSON.parse(window.localStorage.getItem("committeeDetailsFavorites"));
        
    
        //LEG FAVORITES
        var checkValueLeg = false;

        $scope.localDataCommFav.forEach(function(x, index){
            if(x['committee_id'] == $scope.commdataForStars){
                checkValueLeg = true;
            }

        });

        if(checkValueLeg){
            return false;
        }

        else{
            return true;
        }
    }
}
   
    
    

    //ADD DATA TO FAVORITES FROM LOCAL STORAGE (COMMITTEES)
    if(JSON.parse(window.localStorage.getItem("committeeDetailsFavorites")) == null){
        $scope.localDataComm = [];
    }
    
    else{
        $scope.localDataComm = JSON.parse(window.localStorage.getItem("committeeDetailsFavorites"));
    }
    //COMMITEESS FAVORITES
    
    $scope.favButtonClick = function(committeeDetails){
       
        
        var checkValue = false;
    
        $scope.localDataComm.forEach(function(x, index){
            if(x['committee_id'] == committeeDetails['committee_id']){
                checkValue = true;
                Rindex = index;
            }
            
        });
            
    
        if(checkValue){
            $scope.localDataComm.splice(Rindex, 1);
            localStorage.setItem("committeeDetailsFavorites", JSON.stringify($scope.localDataComm));
            
        }

        else{
            $scope.localDataComm.push(committeeDetails);

            
        }
        
        localStorage.setItem("committeeDetailsFavorites", JSON.stringify($scope.localDataComm));

        
                   
    };
    
    
    //DELETE ROW ON CLICK
    $scope.removeUser = function (index) {
            $scope.localDataComm.splice(index, 1);
            localStorage.setItem("committeeDetailsFavorites", JSON.stringify($scope.localDataComm));
        
     };
    
    
      
    
    
    
     //YELLOW STAR FUNCTION
    $scope.isYellow = function(){
        
        if(JSON.parse(window.localStorage.getItem("LegDetailsFavorites")) == null){
            return false;
        }
    
        else{
            $scope.localDataLegFav = JSON.parse(window.localStorage.getItem("LegDetailsFavorites"));
        
    
        //LEG FAVORITES
        var checkValueLeg = false;

        $scope.localDataLegFav.forEach(function(x, index){
            if(x['bioguide_id'] == $scope.dataForStars){
                checkValueLeg = true;
            }

        });

        if(checkValueLeg){
            return false;
        }

        else{
            return true;
        }
    }
}
    
    
    
    
    
    
    
    //ADD DATA TO FAVORITES FROM LOCAL STORAGE(LEGISLATORS)
    if(JSON.parse(window.localStorage.getItem("LegDetailsFavorites")) == null){
        $scope.localDataLeg = [];
    }
    
    else{
        $scope.localDataLeg = JSON.parse(window.localStorage.getItem("LegDetailsFavorites"));
        }
    
    //LEG FAVORITES
    $scope.favButtonClickLeg = function(LegDetails){
        
        var checkValueLeg = false;
    
        $scope.localDataLeg.forEach(function(x, index){
            if(x['bioguide_id'] == LegDetails['bioguide_id']){
                checkValueLeg = true;
                RindexLeg = index;
            }
            
        });
            
    
        if(checkValueLeg){
            $scope.localDataLeg.splice(RindexLeg, 1);
            localStorage.setItem("LegDetailsFavorites", JSON.stringify($scope.localDataLeg));

        }

        else{
            $scope.localDataLeg.push(LegDetails);
           
            
        }
        
        localStorage.setItem("LegDetailsFavorites", JSON.stringify($scope.localDataLeg));
        
                   
    };
    
    
    //DELETE ROW
    $scope.removeUserLeg = function (index) {
            $scope.localDataLeg.splice(index, 1);
            localStorage.setItem("LegDetailsFavorites", JSON.stringify($scope.localDataLeg));
     };
    
    
    
    
    
    //YELLOW STAR FUNCTION
    $scope.isYellowBill = function(){
        
        if(JSON.parse(window.localStorage.getItem("BillDetailsFavorites")) == null){
            return false;
        }
    
        else{
            $scope.localDataBillFav = JSON.parse(window.localStorage.getItem("BillDetailsFavorites"));
        
    
        //LEG FAVORITES
        var checkValueLeg = false;

        $scope.localDataBillFav.forEach(function(x, index){
            if(x['bill_id'] == $scope.billdataForStars){
                checkValueLeg = true;
            }

        });

        if(checkValueLeg){
            return false;
        }

        else{
            return true;
        }
    }
}
    
    
    
    
    
    
    
    
    //ADD DATA TO FAVORITES FROM LOCAL STORAG - BILLS
    
    if(JSON.parse(window.localStorage.getItem("BillDetailsFavorites")) == null){
        $scope.localDataBill = [];
    }
    
    else{
        $scope.localDataBill = JSON.parse(window.localStorage.getItem("BillDetailsFavorites"));
        }
    //COMMITEESS FAVORITES
    
    $scope.favButtonClickBill = function(BillDetails){
       
        
        var checkValueBill = false;
    
        $scope.localDataBill.forEach(function(x, index){
            if(x['bill_id'] == BillDetails['bill_id']){
                checkValueBill = true;
                RindexBill = index;
            }
            
        });
            
    
        if(checkValueBill){
            $scope.localDataBill.splice(RindexBill, 1);
            localStorage.setItem("BillDetailsFavorites", JSON.stringify($scope.localDataBill));

        }

        else{
            $scope.localDataBill.push(BillDetails);
            
            
        }
        
        localStorage.setItem("BillDetailsFavorites", JSON.stringify($scope.localDataBill));
        
                   
    };
    
    
    //DELETE ROW
    $scope.removeUserBill = function (index) {
            $scope.localDataBill.splice(index, 1);
            localStorage.setItem("BillDetailsFavorites", JSON.stringify($scope.localDataBill));
     };
    
    
    
    
    
    //INITIALIZE FILEDS
    $scope.clickedElement = "Legislators";
    
    //INITIALIZE NG-SHOW ATTRIBUTES
    $scope.showLegMain =true;
    $scope.legDetailsItem = false;
    $scope.showBillsMain = false;
    $scope.BillsDetailsItem = false;
    $scope.showCommitteesMain = false;
    $scope.showFavLeg = false;
    
    
   
    
    
    //FUNCTION TO SHOW LEGISLATOR DATA (PULL DATA ON LOAD)
    $scope.showLegislatorsPage = function(){
        
        //Change Header
        $scope.clickedElement = "Legislators";
        
        //ng-show attributes
        $scope.showLegMain =true;
        $scope.legDetailsItem = true;
        $scope.showBillsMain = false;
        $scope.BillsDetailsItem = false;
        $scope.showCommitteesMain = false;
        $scope.showFavLeg = false;
        
        
        
    }
    
    
    
    
    //LEGISLATORS DATA DOWNLOAD (ON LOAD)
    $scope.pageInitialization = function(){
        
        //Change Header
        $scope.clickedElement = "Legislators";
        
        //ng-show attributes
        $scope.showLegMain =true;
        $scope.legDetailsItem = true;
        $scope.showBillsMain = false;
        $scope.BillsDetailsItem = false;
        $scope.showCommitteesMain = false;
        $scope.showFavLeg = false;
       
        
        //INITIALIZE LEGISLATOR DATA
        $scope.myLegislatorData = {};

        var data = {action:"downloadLegislators"};
        var config = {params: data};

        
    //    $http.get("http://cs571app.us-west-2.elasticbeanstalk.com/?operation=legislators", config).then(function successCallback(response){
        //$http.get("indexWIP.php", config).then(function successCallback(response){
        
        //PULL LEGISLATOR API
        $http.get("index.php", config).then(function successCallback(response){    
            $scope.myLegislatorData = JSON.parse(response.data);
            
        });
        
        //INITIALIZE BILL DATA
        $scope.myBillsData = {};

        var data = {action:"downloadBills"};
        var config = {params: data};

        //PULL BILL API
        $http.get("index.php", config).then(function successCallback(response){    
                $scope.myBillsData = JSON.parse(response.data);
                
            }); 
        
        //INITIALIZE COMMITTEE DATA
        $scope.myCommitteeData = {};

        var data = {action:"downloadCommittees"};
        var config = {params: data};
        
        //PULL COMMITTEE API
        $http.get("index.php", config).then(function successCallback(response){    
            $scope.myCommitteeData = JSON.parse(response.data);
            

        });
        
        
        
        
    }
    
    
    
    //BILLS DATA DOWNLOAD
    $scope.billsDataPull = function(){
        
        //Change Header
        $scope.clickedElement = "Bills";
        
        //ng-show attributes
        $scope.showLegMain =false;
        $scope.legDetailsItem = false;
        $scope.showBillsMain = true;
        $scope.BillsDetailsItem = true;
        $scope.showCommitteesMain = false;
        $scope.showFavLeg = false;
        
        
      
    }
    
    //COMMITTEES DATA DOWNLOAD
    $scope.committeesDataPull = function(){
        
        //Change Header
        $scope.clickedElement = "Committees";
        
        //ng-show attributes
        $scope.showLegMain =false;
        $scope.legDetailsItem = false;
        $scope.showBillsMain = false;
        $scope.BillsDetailsItem = false;
        $scope.showCommitteesMain = true;
        $scope.showFavLeg = false;
       
        
        
    }
    
    
    //FAVORITES DATA SHOW
    $scope.FavoritesClick = function(){
        
        //Change Header
        $scope.clickedElement = "Favorites";
        
        //ng-show attributes
        $scope.showLegMain =false;
        $scope.legDetailsItem = false;
        $scope.showBillsMain = false;
        $scope.BillsDetailsItem = false;
        $scope.showCommitteesMain = false;
        $scope.showFavLeg = true;
     
        
    }
    
    
    
    //VIEW BILL DETAILS FUNCTION
    
    $scope.buttonViewBillDetails = function(billid){
        
        $scope.clickedElement = "Bills";
        //ng-show attributes
        $scope.showLegMain =false;
        $scope.legDetailsItem = false;
        $scope.showBillsMain = true;
        $scope.BillsDetailsItem = true;
        $scope.showCommitteesMain = false;
        $scope.showFavLeg = false;
       
        $scope.billdataForStars = billid;
        
        //INITIALIZE BILL DATA FOR SPECIFIC BIOGUIDE ID
        $scope.myBillsDataForBill = {};

        var data = {action:"downloadBillsForBill", billID: billid};
        var config = {params: data};

        //PULL BILL API
        $http.get("index.php", config).then(function successCallback(response){    
                $scope.myBillsDataForBill = JSON.parse(response.data);
                
                
            }); 
        
    }
    
    
    
    //VIEW LEGISLATOR DETAILS FUNCTION
    
    $scope.buttonViewLegDetails = function(bioguideID){
        
        $scope.clickedElement = "Legislators";
        //UNCOMMENT SECTION 
        //ng-show attributes
        $scope.showLegMain =true;
        $scope.legDetailsItem = true;
        $scope.showBillsMain = false;
        $scope.BillsDetailsItem = false;
        $scope.showCommitteesMain = false;
        $scope.showFavLeg = false;
        
        
        $scope.dataForStars = bioguideID;
        
        
        //INITIALIZE LEG DATA FOR SPECIFIC BIOGUIDE ID
        $scope.myLegDetailsForLeg = {};

        var data = {action:"downloadLegForLegDetails", bioguideID: bioguideID};
        var config = {params: data};

        //PULL BILL API
        $http.get("index.php", config).then(function successCallback(response){    
                $scope.myLegDetailsForLeg = JSON.parse(response.data);
             
            
                
            }); 
        
        
        
        //INITIALIZE COMM DATA FOR SPECIFIC BIOGUIDE ID
        $scope.myLegDetailsComm = {};

        var data = {action:"downloadCommForLegDetails", bioguideID: bioguideID};
        var config = {params: data};

        //PULL BILL API
        $http.get("index.php", config).then(function successCallback(response){    
                $scope.myLegDetailsComm = JSON.parse(response.data);
             
                
            }); 
        
        
        //INITIALIZE BILL DATA FOR SPECIFIC BIOGUIDE ID
        $scope.myLegDetailsBills = {};

        var data = {action:"downloadBillForLegDetails", bioguideID: bioguideID};
        var config = {params: data};

        //PULL BILL API
        $http.get("index.php", config).then(function successCallback(response){    
                $scope.myLegDetailsBills = JSON.parse(response.data);
          
                
            }); 
        
        
        
        
    }
    
    

}); //END OF CONTROLLER
    