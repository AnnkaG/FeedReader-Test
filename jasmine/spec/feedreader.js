/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {
    
    
    // 'RSS feed' tests Suite
    //************************************************************
    
    describe('RSS Feeds', function() {
        /* Test that the allFeeds variable has been defined 
         * and is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that each feed in allFeeds has defined URL 
         * which is not empty.
         */
        it('URL not empty and defined', function(){
           allFeeds.forEach(function(el){
           expect(el.url).toBeDefined();
           expect(el.url.length).toBeGreaterThan(0);    
           });   
         });

        /* Test that each feed in allFeeds has name defined
         * and that the name is not empty.
         */
        it('name defined and not empty', function(){
           allFeeds.forEach(function(el){
           expect(el.name).toBeDefined();
           expect(el.name.length).toBeGreaterThan(0);    
           });   
         });
        
    });

    
    // 'The Menu' Tests Suite
    //*****************************************************************
    
    describe('The menu', function() {
   

        /* Test that menu element is hidden by default.
         */
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
        
        /* Test that menu element changes visibilty on click
          */
        it('changes visibility', function() {
           // invisible
            expect($('body').hasClass('menu-hidden')).toBe(true);
           
           // visible after click    
            $('.menu-icon-link').click();
            
            expect($('body').hasClass('menu-hiden')).not.toBe(true);
        });
 });
    
        
    // 'Initial Entries' Tests Suite
    //*****************************************************************
    
    describe('Initial Entries', function() {  
       

        /* Test that there is at least one .entry element within the .feed container
         * after loadFeed function finishes.
         */
        
        beforeEach(function(done){ 
            loadFeed(0,function(){
              done();
              });
            });
        
        it('at least single entry in .feed container', function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();       
            });
        });     
        
    
    // 'New Feed' Selection Suite
    //*****************************************************************   
      describe('New Feed Selection', function() {  
        var originalFeed;
        var newFeed;
        
        
        /* Test that ensures that with every new feed the content 
         * actually changes.
         */
        beforeEach(function(done){ 
            originalFeed = $('.feed').html();
            loadFeed(0,function(){
            done();
            newArray = $('.feed').html();
            });
        });
          
        it('changed content after load', function(done){
            expect(originalFeed).not.toEqual(newFeed);
            done();       
            });
        });   
           
    

}());
