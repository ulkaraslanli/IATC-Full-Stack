const feedbackContent = document.getElementById('feedContent');

feedbackData.filter(feedback => feedback.status === 'suggestion').forEach(feedback => {
    if (feedback.id == '1') {
        const feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'feedback';
    
        const feedbackUpvoteDiv = document.createElement('div');
        feedbackUpvoteDiv.className = 'feedbackUpvote';
    
        const feedbackContentDiv = document.createElement('div');
        feedbackContentDiv.className = 'feedbackContent';
    
        const feedbackCommentDiv = document.createElement('div');
        feedbackCommentDiv.className = 'feedbackComment';
    
        const upvotesElement = document.createElement('p');
        upvotesElement.textContent = feedback.upvotes;
    
        const titleElement = document.createElement('h3');
        titleElement.textContent = feedback.title;
    
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = feedback.description;
        descriptionElement.style.margin = '10px';
        descriptionElement.style.color = '#647196';
    
        const categoryElement = document.createElement('a');
        categoryElement.textContent = feedback.category;
        categoryElement.style.textDecoration ="none";
        categoryElement.href=`sugg${feedback.id}.html`;
    
        const commentSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        commentSvg.setAttribute('width', '18');
        commentSvg.setAttribute('height', '16');
        commentSvg.setAttribute('viewBox', '0 0 18 16');
        commentSvg.setAttribute('fill', 'none');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z');
        path.setAttribute('fill', '#CDD2EE');
        commentSvg.appendChild(path);
    
        const commentsCountElement = document.createElement('a');
        commentsCountElement.textContent = feedback.comments.length;
    
        feedbackUpvoteDiv.appendChild(upvotesElement);
        feedbackContainer.appendChild(feedbackUpvoteDiv);
    
        feedbackContentDiv.appendChild(titleElement);
        feedbackContentDiv.appendChild(descriptionElement);
        feedbackContentDiv.appendChild(categoryElement);
        feedbackContainer.appendChild(feedbackContentDiv);
    
        feedbackCommentDiv.appendChild(commentSvg);
        feedbackContainer.appendChild(feedbackCommentDiv);
    
        feedbackCommentDiv.appendChild(commentsCountElement);
        feedbackContainer.appendChild(feedbackCommentDiv);
    
        feedbackContent.appendChild(feedbackContainer);    
    }
    });