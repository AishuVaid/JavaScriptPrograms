const readline = require('readline-sync');
module.exports =
    {


        /************************************************ *
         *Purpose :to deploy all the business logic
         *
         * @description
         * @file :utility.js
         * @overview : All the business logic is coded here.
         * @author : Aishwarya.R.M.
         * @version :1.0
         * @Since: 27-01-2019
         * 
         ******************************************************/


         /**************Reading a file.******************
          * @purpose : To read file from the path.
          * @function : fileRead function reads the file snd splits it 
          * by space and returns.
          * 
          /**
           * require fs module in whcih readFile function is defined.
           * */

        fileRead()
        {
            var fileStream=require('fs');
            var f=fileStream.readFileSync('sample.txt','utf8');
            var arr=f.split(' ');
            return arr;
        },
        /***********************************************
         * @purpose : To write data into a file.
         * @function : fileWrite function write the data to a file.
         * @param : fileWrite function accepts fileName and data to be
         * written.
         * ***********************************************
         */

         fileWrite(fileName,data)
         {
             const fs=require('fs');
             fs.writeFile(fileName,data ,function(err)
            {
                if(err)
                {
                    return console.log(err);
             }
            })
        },         




        /****************StringReplace********************** *
        * 1.StringReplace
        * *************************
        * @purpose : Ensure UserName has a minimum of 3 characters,is not a number
        * and must be an alphabet,then replace the username with user input and print
        * the value.
        * @description : invoke this method and pass user input as parameter.
        * @function: username takes the user name and prints the value
        * **********************************************************/
        replaceString(username) 
        {
            var input = "Hello <<UserName>>, How are you?"
            var output1 = input.replace(/<<UserName>>/g, username);//Regex
            console.log(output1);
        },



        /***********************************************************************
         * ********************FlipACoin.js**************************************
         * 2.Flip a coin.
         * 
         * @purpose : Ensure UserName has a minimum of 3 characters,is not a number
        * and must be an alphabet,then replace the username with user input and print
        * the value.
        * @description : invoke this method and pass user input as parameter.
        * @function: username takes the user name and prints the value
        * ***************************************************************** */

        flipACoin(result) 
        {
            var head = 0;//declare head variable
            var tail = 0;//declare tail variable
            var n = 0;
            for (n = 0; n < result; n++) //looping over the result
            {
                var flip = Math.random();
                if (flip > 0.5) {
                    head++;//increment head
                }
            }
            var HeadResult = (head / result) * 100;//calculate Head result percentage 
            console.log("result of heads =" + HeadResult + "%");//calculate head percentage
            console.log("result of tails percentage =" + (100 - HeadResult) + "%");//calculate tail
            // percentage

        },


        /***********************************************************************
         * *******************CheckLeapYear.js**************************************
         * 2.check if leap year or not.
         * 
         * @purpose : Performed in order to check whether the given year is a leap
         * year or not.
        * @description : invoke this method and pass user input as parameter.
        * @function: Print the year is a Leap Year or not.
         * ***************************************************************** */

        checkLeapYear(year) {

            if (year > 999) {
                if ((year % 4 == 0) || (year % 400 == 0) || (year % 100 == 0)) {
                    console.log("It is a leap year!!");
                    return true;
                }
                else {
                    console.log("It's not a leap year");
                    return false;
                }
            }
            else {
                console.log("Enter a valid year");
                return false;
            }

        },

        /********************************POWER OF 2**************************************
         * 3.Power of 2.js
        *@Purpose : This program takes the command line argument N and prints the table of the
             powers of 2 that are less than or equal to 2^N.
        *@description :
      **************************************************************************/

        getPowerOf2(power) {

            var i;
            if (power >= 0 && power < 31) {
                for (i = 0; i <= power; i++) {

                    console.log("2^" + i + "=" + Math.pow(2, i))
                }
            }
        },



        /************************Harmonic number**************************
         * 5.Harmonic number.
         *  *@Purpose : Print the Nth Harmonic Value.
        *@description :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N.
        *@function : compute 1/1 + 1/2 + 1/3 + ... + 1/N.

         */

        findHarmonicNumber(num) 
        {
            try 
            {
                var sum = 0, i = 0;
                if (num != 0) 
                {
                    for (i = 1; i <= num; i++) 
                    {
                        sum += (1 / i);
                    }
                    console.log("harmonic value " + num + "=" + sum);
                }
                else 
                {

                    console.log("please enter the number");
                }
            }
            catch (e) 
            {
                console.log(e.message);
            }
        },


        /****************Prime Factors*********************
         * 6.Prime Factors.
         * @purpose : Print the prime factors of number N.
         *@description : Computes the prime factorization of N using brute force.
         @function : Traverse till i*i <= N instead of i <= N for efficiency.
         */


        getPrimeFactors(number) 
        {

            var i;
            if (number > 0) 
            {
                for (i = 2; i <= number; i++) 
                {
                    while (number % i == 0) 
                    {
                 number = number / i;
                        console.log(i);
                    }

                }
            }
        },

        /******************************************************************************
         * *******************PlayGambler.js**************************************
         * @Purpose : Print Number of wins and percentage of win and loss.
         *@description :
         *
         *
         *
      *@overview : Simulates a gambler who start with $stake and place fair 
      *$1 bets until he goes broke. play till gambler is broke or has won.
      *@function : Keeps track of the number of times he/she wins and the 
      number of bets he/she makes. Run the experiment N times, averages 
      the results, and prints them out.
      
      
      ***********************************************************************
      */



        playGambler(stake, goal, times) {
            var win = 0, loss = 0;
            for (let i = 0; i < times; i++) {
                while (times > 0 && stake < goal && stake > 0) {
                    if (Math.random() > 0.5) {
                        win++;
                        stake++;
                        times--;
                    }
                    else {
                        loss++;
                        stake--;
                        times--;
                    }
                }
            }
            var total = win + loss;
            var winP = (win / total) * 100;
            var lossP = (loss / total) * 100;
            console.log("win percentage is " + winP);
            console.log("loss percentage is " + lossP)
        },


        /*********************get coupon number *************************
         * 8.coupon number
         * @purpose : To generate N Distinct Coupon Numbers.
         * 
         * @description :  Given N distinct Coupon Numbers, how many random 
         * numbers do you need to generate distinct coupon number? 
         * This program simulates this random process.
         * 
         * @function : Write Class Static Functions to generate 
         * random number and to process distinct coupons.
    
    
    
        */





        getCoupon(number) 
        {
            var arr=[];
            var num=0;
            while(num!=number)
            {
                var x=Math.round(Math.random()*number);
            if(!arr.includes(x))
           {
            arr.push(x);
            num++;
           }           
        }
         console.log(arr);      
        },



        /*********************2D array *************************
    * 8.2Dimensional array
    * @purpose :  create 2 dimensional array in memory to read in M rows and N cols 

    * 
    * @description :   A library for reading in 2D arrays of integers, 
    * doubles, or booleans from standard input and printing
    *  them out to standard output.
    * @function :  Print function to print 2 Dimensional Array. 
    * In Java use PrintWriter with OutputStreamWriter to print the output to the screen.



   */



        getArray(row, cloumn, read) 
        {
            var arr = [];
            for (let i = 0; i < row; i++) 
            {
                arr.push([])
                for (let j = 0; j < cloumn; j++) 
                {
                    var element = read.question("Enter the array elements =");
                    arr[i][j] = element;
                }
            }
            console.log(arr);
        },


        /********************sum of integers is zero**************************
         * 9.Sum of integers equal to 0.
         * @purpose : One Output is number of distinct triplets as well
         *  as the second output is to print the distinct triplets.
         * @description : A program with cubic running time.
         *  Read in N integers and counts the   number of 
         * triples that sum to exactly 0.
         * 
         * @function :  Find distinct triples (i, j, k) 
         * such that a[i] + a[j] + a[k] = 0


         */




        obtainTriplets(arr) {
            var count = 0;
            for (let i = 0; i < arr.length - 2; i++) {
                for (let j = i + 1; j < arr.length - 1; j++) {
                    for (let k = j + 1; k < arr.length; k++) {
                        if ((Number(arr[i]) + Number(arr[j]) + Number(arr[k])) == 0) {
                            console.log(arr[i] + "   " + arr[j] + "   " + arr[k]);
                            count++;
                        }
                    }
                }
            }
            console.log(count);
        },


        /********************Distance**************************
         * 9.find the distance
         * @purpose : to find the distance between orgin and (x,y). 
         * @description : Write a program Distance.java that takes two 
         * integer command-line arguments x and y and prints the 
         * Euclidean distance from the point (x, y) to the origin (0, 0).
         * 
         * @function :  The formulae to calculate distance = sqrt(x*x + y*y).
         *  Use Math.power function


         */






        getDistance() 
        {

            var x = process.argv[3];
            var y = process.argv[2];

            var dist = Math.sqrt(x * x + y * y);
            console.log("Distance from origin " + dist);
        },


        /******************StopWatch.js***************************
         * 13.StopWatch
         * @purpose :  Measure the elapsed time between start and end and print.
         * @description : Start the Stopwatch and End the Stopwatch.Measure the
         *  elapsed time between start and end.
         * @function : Print the elapsed time.



         */

        getCurrentSecond() 
        {
            var dt = new Date();
            var sec = dt.getSeconds();
            return sec;
        },

        StopWatch(read) {
            var startTime = read.question("Click to start stopwatch");
            var start = this.getCurrentSecond();
            var stopTime = read.question("Click to stop stopwatch");
            var stop = this.getCurrentSecond();

            console.log("The elapsed time is =" + Number(stop - start));

        },


        /**********************Equation****************************
         * 15.Quadratic.
         * * @purpose :Write a program Quadratic.java to find the 
         * roots of the equation a*x*x + b*x + c.
         *  Since the equation is x*x, hence there are 2 roots. 
         * @description :  The 2 roots of the equation can be found using a formula 
         * @function : Take a, b and c as input values to find the roots of x.
         */


        getEquation(a, b, c) 
        {
            var root1, root2;
            var delta = (b * b - 4 * a * c);
            console.log("Delta value= " + delta);
            if (delta > 0) {
                root1 = (-b + Math.sqrt(delta)) / (2 * a);
                root2 = (-b - Math.sqrt(delta)) / (2 * a);
                console.log("The roots are " + root1 + "and " + root2);
            }

            if (delta == 0) {
                root1 = -b / (2 * a);
                console.log("The roors are " + root1);

            }

            if (delta < 0) {
                root1 = (-b / (2 * a));
                root2 = (Math.sqrt(Math.abs(-delta))) / 2 * a;
                console.log("the roots are " + root1 + " i" + root2);
            }
        },

        /***********************String Permutation*********************
         * 12.String permutation.
         * @purpose : Check if the arrays returned by two string functions 
         * are equal.
         * @description : Write static functions to return all permutation 
         * of a String using iterative method and Recursion method.
         * @function : Use Recursive function.  

         */






        stringPermutations(string) {
            try {
                var results = [];
                
                if (string.length === 1) {
                    results.push(string);
                    return results;
                }
               
                for (var i = 0; i < string.length; i++) {
                    var firstChar = string[i];
                    var charsLeft = string.substring(0, i) + string.substring(i + 1);
                    var innerPermutations = this.stringPermutations(charsLeft);
                   
                    for (var j = 0; j < innerPermutations.length; j++) {
                        results.push(firstChar + innerPermutations[j]);
                    }
                }
                return results;
            } catch (error) {
                console.log(error.message);
            }
        },

        /***************************************TicTacToe***************************
     * 14.ticTac
     * **********************************
     * @purpose     : To play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the
     *                Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
     * @param       : It accepts the input from the user and prints the result.
     * @function    : Sum the number of times the count of heads and tails,calculate the percentage.
     * *******************************************************************************/


        intializeGame() {
            var game = [];
            for (let i = 0; i <= 2; i++) {
                game.push([]);
                for (let j = 0; j <= 2; j++)
                    game[i][j] = '-';
            }
            return game;
        },
    
        random() {
            var value = Math.floor(Math.random() * 3);
            console.log(value + 1);
            return value;
        },
    
        mark(game, x, y, value) {
            if (game[x][y] == '-')
                game[x][y] = value;
            for (let i = 0; i <= 2; i++) {
                var print = [];
                for (let j = 0; j <= 2; j++)
                    print[j] = game[i][j];
                console.log(print);
            }
            return game;
        }
        ,
        computerPlayer(game) {
            var arr;
            var flag = false;
            while (flag == false) {
                var x = this.random();
                var y = this.random();
                if (game[x][y] == '-') {
                    arr = this.mark(game, x, y, 'O');
                    flag = true;
                }
            }
            return game;
        }
        ,
        userPlayer(game) {
            var flag = false;
            while (flag == false) {
                console.log("Enter the row value:");
                let x = readline.questionInt('Enter the value of x within 1,2,3 : ') - 1;
                let y = readline.questionInt('Enter the value of y within 1,2,3 : ') - 1;
                if (game[x][y] == '-') {
                    this.mark(game, x, y, 'X');
                    flag = true;
                }
                else
                    console.log("Please enter the correct choice");
            }
            return game;
        }
        ,
        check(game) {
            for (let i = 0; i <= 2; i++) {
                if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
                    if (game[i][0] == 'O' || game[i][0] == 'X') {
                        return true;
                    }
                }
                if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
                    if (game[0][i] == 'O' || game[0][i] == 'X') {
                        return true;
                    }
                }
            }
            var k = 0, l = 0;
            if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
                if (game[0][0] == 'O' || game[0][0] == 'X') {
                    return true;
                }
            }
            if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
                if (game[0][0] == 'O' || game[0][0] == 'X') {
                    return true;
                }
            }
            return false;
        },

    
   


        /**************************WindChill**************************
         * @purpose : Write a program WindChill.java that takes two 
         * double command-line arguments t and v and prints the wind chill.
         * @description : Given the temperature t (in Fahrenheit) and the
         *  wind speed v (in miles per hour), the National Weather Service
         *  defines the effective temperature (the wind chill).
         * @function : Use Math.pow(a, b) to compute ab. 



    
         */

          getChill(t, v) 
          {
            var result = (35.74 + 0.6215) * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log(result);

        },

        /****************************************************************************************
         *                         ALGORITHM PROGRAMS
         * **************************************************************************************
         * *******************************Anagram*******************************************
         * 1.Anagram
         * *******************
         * @purpose : take 2 strings as Input such abcd and dcba and check for Anagram.
         * @description : to find whether given strings are anagrams.
         * @function : one string is an anagram of another if the second is simply a 
         * rearrangement of the first
         * ****************************************************************************
         */



        CheckAnagram(s1, s2) {
            var format = /[a-zA-Z0-9]/;
            var result;
            if (format.test(s1) && format.test(s2))
             {
                if (s1.length !== s2.length) {
                   
                    result = false;
                }
                

                var sorts1 = s1.toString().split("").sort().join("");
                var sorts2 = s2.toString().split("").sort().join("");
                
                result = sorts1 === sorts2;
              

                if (result == true) {
                    //console.log("is anagram");
                    return true;
                }
                else {
                   // console.log("not anagram");
                    return false;

                }
            }
            else {
                console.log("enter only letters or alphabets");
            }
        },


        /*********************Prime Numbers from 0 to 1000****************************
         * 2.isPrime
         ****************************
         *@purpose : To find prime number in the given range
         *@description : it takes the input from the user and searches for the prime factors.
         @function: takes a range of 0-1000 numbers and find the prime numbers in that range.
         */




        isPrime(num) 
        {
            if (num == 0 || num == 1)
                return false;

            for (let i = 2; i < num; i++) 
            {
                if (num % i == 0)
                    return false;
            }
            return true;

        },

        primeNum() 
        {
            console.log("Prime number in the range 0 to 1000");

            for (let i = 0; i <= 1000; i++) 
            {
                if (this.isPrime(i)) 
                {
                    console.log(i);
                }
            }
        },


        /********************Anagram,Palindrome,Prime Number*********************
         * 3.isAnagramPalindrome
         * *************************
         * @purpose : to find the numbers that are anagram and palindrome.
         * @description : One string is an anagram of another if the second 
         * is simply a rearrangement of the first. For example, 
         * 'heart' and 'earth' are anagrams.Take a range of
         *  0 - 1000 Numbers and find the Prime numbers in that range. 
         * @function : find the prime numbers that are Anagram and Palindrome.


         */


        isNumberPalindrome(num1) 
        {
            var str = "";
            num1 = num1 + "";

            for (let i = 0; i < num1.length; i++) 
            {
                str = num1.charAt(i) + str;
            }
            if (str == num1) 
            {
                return true;
            }
            return false;
        },

        isAnagramPalindrome() 
        {
            console.log("Prime numbers in the range of 0 to 1000 which are anagram");
            {
                var arr = [];

                for (let i = 0; i < 1000; i++) 
                {
                    if (this.isPrime(i)) 
                    {
                        arr.push(i);
                    }
                }


                for (let i = 0; i < arr.length; i++) 
                {
                    for (let j = i + 1; j < arr.length; j++) 
                    {
                        if (this.CheckAnagram(arr[i], arr[j])) 
                        {
                            console.log(arr[i] + " and " + arr[j] + " are anagram");
                            if (this.isNumberPalindrome(arr[i])) 
                            {
                                console.log(arr[i] + " is palindrome ");
                            }

                            if (this.isNumberPalindrome(arr[j])) 
                            {
                                console.log(arr[j] + " is palindrome ");
                            }
                        }
                    }
                }
            }
        },

        /*******************************BubbleSort********************************************* 
         * 8.BubbleSort
         * *************************
         * @purpose : To print the sorted list.
         * @description :  Reads in integers prints them in sorted order using Bubble Sort.
         * @function : By using the bubble sort algorithm the sorting of the integers is 
         * performed.

        */



        sortByBubble(array) {

            for (let a = 0; a < array.length; a++) 
            {
                for (let b = a + 1; b < array.length; b++) {

                    if (array[a] > array[b]) 
                    {
                        var temp = array[a];
                        array[a] = array[b];
                        array[b] = temp;
                    }
                }
            }
            console.log("Sorted elements are " + array);
        },

        /***********************************Insertion sort*************************************
         * 7.Insertion sort
         * ****************************
         * @purpose : use insertion sort to sort the words in the string array
         * @description : it accepts the input from the user and sort the array using insertion sort.
         * @function : reads in strings from standard input and prints them in sorted order.
         * uses insertion sort
         */



        sortByInsert(array) {

            for (let i = 1; i < array.length; i++) {
                var value = array[i];
                let j = i - 1;
                while (j >= 0 && array[j] > value) {
                    console.log(array);
                    array[j + 1] = array[j];
                    j = j - 1;

                }
                array[j + 1] = value;
            }
            console.log("Sorted elements are " + array);
        },

        /********************************DayOfWeek**************************************** 
         * 11.Day of week
         * ****************************
         * @purpose : dayOfWeek static function that takes a date as input and prints
         *  the day of the week that date falls on. Your program should take three
         *  command-line arguments: m (month), d (day), and y (year).
         * @description : For output print 0 for Sunday, 1 for Monday,
         *  2 for Tuesday, and so forth. 
         * @function : Use the following formulas, for the Gregorian 
         * calendar (where / denotes integer division):
                y0 = y − (14 − m) / 12
                x = y0 + y0/4 − y0/100 + y0/400
                m0 = m + 12 × ((14 − m) / 12) − 2
                d0 = (d + x + 31m0 / 12) mod 7
                                                                                                                                                                                                                                         
        */

        /***************Merge Sort*****************************
         * 13.Merge Sort.
         * @purpose : - Write a program with Static Functions to do 
         * Merge Sort of list of Strings. 
         * @description : To Merge Sort an array, we divide it
         *  into two halves, sort the two halves independently,
         *  and then merge the results to sort the full array. 
         * To sort a[lo, hi), we use the following recursive strategy:
           Base case: If the subarray length is 0 or 1, it is already sorted.
           @function : compute mid = lo + (hi - lo) / 2, 
           recursively sort the two subarrays a[lo, mid) and a[mid, hi), 
            and merge them to produce a sorted result.



         */



/******************mergeSort******************** */

    /**
     * 6.Takes the array as an input and sorts it in the ascending order
     * 
     * 
     * @description:​ To Merge Sort an array, we divide it into two halves, sort the two halves
        independently, and then merge the results to sort the full array
     * 
     * @purpose :to sort an array
     * 
     * @function:mergesort divides the array into halves, toMerge merges the divided array into sorted array
     */
    merge(left, right, arr) {
        try {
          var i = 0;
          var j = 0;
          var k = 0;
          /**
           *merge elements into arr[]
           */
          while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
              arr[k] = left[i];
              i++;
            } else {
              arr[k] = right[j];
              j++;
            }
            k++;
          }
          /**
           * if left[] is greater than right[], push all left[] into arr[]
           */
          while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
          }
          /**
           * if left[] is lesser than right[], push all right[] into arr[]
           */
          while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
          }
          return arr;
        } catch (error) {
          console.log(error.message);
        }
      },
      mergeSort(arr) {
        try {
          var n = arr.length;
          /**
           * if size is less than 2 return that.
           */
          if (n < 2) {
            return;
          }
          /**
           * calculate mid value
           */
          var mid = Math.floor(n / 2);
          var left = [mid];
          var right = [n - mid];
          /**
           * store  elements in left array which are present before the mid
           */
          for (let i = 0; i < mid; i++) {
            left[i] = arr[i];
          }
          /**
           * store  elements in left array which are present before the mid
           */
          for (let j = mid; j < n; j++) {
            right[j - mid] = arr[j];
          }
          /**
           * call mergesort for left half
           */
          this.mergeSort(left);
          /**
           * call mergesort for left half
           */
          this.mergeSort(right);
          this.merge(left, right, arr);
        } catch (error) {
          console.log(error.message);
        }
      },
    

           /********************************DayOfWeek**************************************** 
         * 11.Day of week
         * ****************************
         * @purpose : dayOfWeek static function that takes a date as input and prints
         *  the day of the week that date falls on. Your program should take three
         *  command-line arguments: m (month), d (day), and y (year).
         * @description : For output print 0 for Sunday, 1 for Monday,
         *  2 for Tuesday, and so forth. 
         * @function : Use the following formulas, for the Gregorian 
         * calendar (where / denotes integer division):
                y0 = y − (14 − m) / 12
                x = y0 + y0/4 − y0/100 + y0/400
                m0 = m + 12 × ((14 − m) / 12) − 2
                d0 = (d + x + 31m0 / 12) mod 7
                                                                                                                                                                                                                                         
        */




        findDay(day, month, year) 
         {
            var y0 = year - Math.floor((14 - month) / 12);
            var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
            var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
            var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
            return d0;

            /*switch (d0) {
                case 0: return "Sunday";
                case 1: return "Monday";
                case 2: return "Tuesday";
                case 3: return "Wednesday";
                case 4: return "Thursday";
                case 5: return "Friday";
                case 6: return "Saturday";

            }*/

        },

        /**********Temperature Conversion******************
         *12.Temperature Conversion.
         @purpose : prints the day of the week that date falls on.
         @description :   
         */








        convertTemp(read) {
            var t = 0;
            var cel = 0;
            var far = 0;

            t = read.question("press 0 to get result in farhenheit \npress 1 to get result in celcius \nenter your choice =");
            if (t == 0) {
                cel = read.question("Enter the temperature =");
                far = (cel * 9 / 5) + 32;
                console.log("Temperature in farhenheit=" + far);

            }
            else if (t == 1) {
                far = read.question("Enter the temperature= ");
                cel = (far - 32) * 5 / 9;
                console.log("Temperature in celcius=" + cel);

            }
        },











        FindNumber(low, high, read) {
            var mid = low + Math.floor((high - low) / 2);
            var d;
            if (low < high) {
                if (low == high - 1) {
                    d = read.question("Is the number " + low + "if yes press--Yes " + " " + "if number is high  press no");
                    if (d == "yes")
                        return low;
                    if (d == "no")
                        return high;

                }
                d = read.question("Is the number in the range " + mid + "-" + high + "if yes,press -->yes else press--> no");
                if (d == "yes")
                    mid = this.FindNumber(mid, high, read);
                if (d == "no")
                    mid = this.FindNumber(low, mid - 1, read);
            }
            return mid;
        },


        /************************MonthlyPayment************************************ 
   * 13.MonthlyPayment
  * **************************
  * @purpose : To calculate the monthly payment.
 * @description: It accepts the input from the command line arguments and calculates the monthly
 *  payment
 * @function : It reads in 3 command line arguments P,Y and R and calculates the monthly payment you 
         * would have to make over Y years to pay off a P principal loan amount at R per cent interest compounded monthly. 
        */

        geMonthlyPayment() {
            var Principal = process.argv[2];
            var Years = process.argv[3];
            var Rate = process.argv[4];
            var payment = 0;
            var r = Rate / (12 * 100);
            var n = 12 * Years;

            payment = (Principal * r) / (1 - Math.pow((1 + r), -n));
            console.log(payment);
            /**
             * Calculating the monthly payment using formula
             */
        },


    /************************Binary search************************************ 
   * 13.Binary search
  * **************************
  * @purpose : Use Arrays to sort the word list and then do the binary search.
 * @description:  Read in a list of words from File. Then prompt the user to 
 * enter a word to search the list. The program reports if the search word 
 * is found in the list.
* @function : read in the list words comma separated from a File and then
 enter the word to be searched
 
        */




        getBinarySearch(arr, word) {
            arr.sort();
            var li = 0;
            var hi = arr.length - 1;
            var mi = Math.floor((li + hi) / 2);
            while (li <= hi) {
                if (arr[mi] === word) {
                    return true;
                }
                else if (arr[mi] < word) {
                    li = mi + 1;
                }
                else {
                    hi = mi - 1;
                }
                mi = Math.floor((li + hi) / 2);
            }
            return false;
        },

/*****************************Vending Machine**************************
 * 
 * @purpose : Two Outputs - one the number of minimum Note needed to 
 * give the change and second list of Rs Notes that would given in the Change.
 * @description : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which 
 * can be returned by Vending Machine. Write a Program to calculate the
 *  minimum number of Notes as well as the Notes to be returned by the
 *  Vending Machine as a Change.
 * @function :  Use Recursion and check for largest value of the Note 
 * to return change to get to minimum number of Notes. 



 */









        countNotes(arr, amount) 
        {
            var notes = 0;
            for (let i = 0; i < arr.length; i++) {
                if (amount / arr[i] >= 1) {
                    var c = Math.floor(amount / arr[i])
                    notes = notes + c;
                    console.log(arr[i] + " notes are :" + c)
                    amount = amount % arr[i]
                }
            }
            console.log("total number of notes :" + notes);
        },

/*****************************Square root**************************
 * 
 * @purpose : Write a static function sqrt  to compute the square root 
 * of a nonnegative number c given in the input using Newton's method.
 * @description :  initialize t = c
- replace t with the average of c/t and t
 * @function :  - repeat until desired accuracy reached using 
 condition Math.abs(t - c/t) > epsilon*t where epsilon = 1e-15;


 */



        findRoot(number)
         {
            var temp = number;
            const epsilon = 1e-15;
            while (Math.abs(temp - number / temp) > epsilon * temp) {
                temp = (number / temp + temp) / 2;
            }
            console.log("Square root of number is " + temp);
        },

        /***********************toBinary ******************************
         * 15.toBinary
         * 
        */





        toBinary(num)
        {
            var temp=num;
            var string="";
            while(num>0.9)
            {
                var result=Math.floor(num%2);
                string=result+string;
                num=num/2;
            }
            console.log("Binary value of given number= "+string);
        },

        bintoDecimal(num)
        {
            var sum=0;
            var j=0;
            for(let i=num.length-1;i>=0;i--)
            {
                sum=sum+(num.charAt[i]*Math.pow2,j);
                j++;
            }
            console.log(sum);
        },



        convertBinary(num)
        {
            var string=this.toBinary(num);
            string1=string.substring(0,4);
            string2=string.substring(4,string.length);
            var swap=string2+string1;
            this.bintoDecimal(swap);
            return swap;
        }
    
    }
        

