function ProjectMask( element ) {
    this.element = element;
    this.projectTrigger = this.element.find('.project-trigger');
    this.projectClose = this.element.find('.project-close');
    this.projectTitle = this.element.find('h1');
    this.projectMask = this.element.find('.mask');
    //...
    this.initProject();
}

var revealingProjects = $('.cd-project-mask');
var objProjectMasks = [];

if( revealingProjects.length > 0 ) {
    revealingProjects.each(function(){
        //create ProjectMask objects
        objProjectMasks.push(new ProjectMask($(this)));
    });
}

ProjectMask.prototype.initProject = function() {
    var self = this;

    //open the project
    this.projectTrigger.on('click', function(event){
        event.preventDefault();
        if( !self.animating ) {
            self.animating = true;
            //upload project content
            self.uploadContent();
            //show project content and scale up mask
            self.revealProject();
        }
    });

    //...
};

ProjectMask.prototype.revealProject = function() {
    var self = this;
    //get mask scale value
    self.updateMaskScale();
    //scale up mask and animate project title
    self.projectTitle.attr('style', 'opacity: 0;');
    self.projectMask.css('transform', 'translateX(-50%) translateY(-50%) scale('+self.maskScaleValue+')').one(transitionEnd, function(){
        self.element.addClass('center-title');
        self.projectTitle.attr('style', '');
        self.animating = false;
    });

    //hide the other sections
    self.element.addClass('project-selected content-visible').parent('.cd-image-mask-effect').addClass('project-view');
}

ProjectMask.prototype.uploadContent = function(){
    var self = this;
    //if content has not been loaded -> load it
    if( self.projectContent.find('.content-wrapper').length == 0 ) self.projectContent.load(self.projectContentUrl+'.html .cd-project-info > *');
    if( self.projectContentUrl+'.html'!=window.location ){
        //add the new page to the window.history
        window.history.pushState({path: self.projectContentUrl+'.html'},'',self.projectContentUrl+'.html');
    }
}