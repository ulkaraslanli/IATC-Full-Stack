const feedbackComments = document.getElementById('feedComments');

feedbackData.filter(feedback => feedback.status === 'suggestion').forEach(feedback => {
    if (feedback.id === 1) {
        const feedComCount = document.createElement('div');
        feedComCount.className = 'feedComCount';

        const feedComCountPar = document.createElement('h4');
        feedComCountPar.textContent = `${feedback.comments.length} Comments`;

        feedComCount.appendChild(feedComCountPar);
        feedbackComments.appendChild(feedComCount);

        feedback.comments.forEach(comment => {
            const feedbackContainer = document.createElement('div');
            feedbackContainer.className = 'feedbackContainer';
        
            const feedComHeaderDiv = document.createElement('div');
            feedComHeaderDiv.className = 'feedComHeaderDiv';
    
            const feedComHeaderImgDiv = document.createElement('div');
            feedComHeaderImgDiv.className = 'feedComHeaderImgDiv';
    
            const feedComHeaderUserDiv = document.createElement('div');
            feedComHeaderUserDiv.className = 'feedComHeaderUserDiv';
    
            const feedComHeaderReplyDiv = document.createElement('div');
            feedComHeaderReplyDiv.className = 'feedComHeaderReplyDiv';
    
            const feedComHeaderImg = document.createElement('img');
            feedComHeaderImg.src = comment.user.image;
    
            const feedComHeaderUserHead = document.createElement('h4');
            feedComHeaderUserHead.textContent = comment.user.name;
    
            const feedComHeaderUserPar = document.createElement('p');
            feedComHeaderUserPar.textContent = comment.user.username;
    
            const feedComHeaderReply = document.createElement('a');
            feedComHeaderReply.textContent = "Reply";
    
            const feedComContentDiv = document.createElement('div');
            feedComContentDiv.className = 'feedComContentDiv';
    
            const feedComContentPar = document.createElement('p');
            feedComContentPar.textContent = comment.content;
    
            feedComHeaderImgDiv.appendChild(feedComHeaderImg);
            feedComHeaderUserDiv.appendChild(feedComHeaderUserHead);
            feedComHeaderUserDiv.appendChild(feedComHeaderUserPar);
            feedComHeaderReplyDiv.appendChild(feedComHeaderReply);
    
            feedComHeaderDiv.appendChild(feedComHeaderImgDiv);
            feedComHeaderDiv.appendChild(feedComHeaderUserDiv);
            feedComHeaderDiv.appendChild(feedComHeaderReplyDiv);
    
            feedComContentDiv.appendChild(feedComContentPar);
    
            feedbackContainer.appendChild(feedComHeaderDiv);
            feedbackContainer.appendChild(feedComContentDiv);
        
            feedbackComments.appendChild(feedbackContainer);        
        });
    }
});