const plannedDiv = document.getElementById('plannedDiv');
const progressDiv = document.getElementById('progressDiv');
const liveDiv = document.getElementById('liveDiv');

let plannedCount = 0;
let progressCount = 0;
let liveCount = 0;

feedbackData.filter(feedback => feedback.status).forEach(feedback => {
    if (feedback.status === 'planned') {
        plannedCount += 1;
    } else if (feedback.status === 'in-progress') {
        progressCount += 1;
    } else if (feedback.status === 'live') {
        liveCount += 1;
    };
});

const plannedHeading = document.createElement('h4');
plannedHeading.textContent = `Planned (${plannedCount})`;
const plannedParagraph = document.createElement('p');
plannedParagraph.textContent = 'Ideas prioritized for research';

const progressHeading = document.createElement('h4');
progressHeading.textContent = `In-Progress (${progressCount})`;
const progressParagraph = document.createElement('p');
progressParagraph.textContent = 'Currently being developed';

const liveHeading = document.createElement('h4');
liveHeading.textContent = `Live (${liveCount})`;
const liveParagraph = document.createElement('p');
liveParagraph.textContent = 'Released features';

plannedDiv.appendChild(plannedHeading);
plannedDiv.appendChild(plannedParagraph);
progressDiv.appendChild(progressHeading);
progressDiv.appendChild(progressParagraph);
liveDiv.appendChild(liveHeading);
liveDiv.appendChild(liveParagraph);


feedbackData.filter(feedback => feedback.status === 'planned' || feedback.status === 'in-progress' || feedback.status === 'live').forEach(feedback => {
    const roadmapColumnDiv = document.createElement('div');
    roadmapColumnDiv.className = 'rm-case';

    const roadmapLineDiv = document.createElement('div');
    roadmapLineDiv.className = 'rm-line';

    const roadmapBoxDiv = document.createElement('div');
    roadmapBoxDiv.className = 'rm-box';

    const roadmapDotContainerDiv = document.createElement('div');
    roadmapDotContainerDiv.className = 'rm-dot-container';

    const roadmapDotDiv = document.createElement('div');
    roadmapDotDiv.className = 'rm-dot';

    const roadmapBoxFooterDiv = document.createElement('div');
    roadmapBoxFooterDiv.className = 'rm-box-footer';

    const roadmapUpvotesDiv = document.createElement('div');
    roadmapUpvotesDiv.className = 'rm-upvotes';

    const roadmapBoxFooterCommentsDiv = document.createElement('div');
    roadmapBoxFooterCommentsDiv.className = 'rm-box-footer-comments';

    const statusElement = document.createElement('p');
    statusElement.textContent = feedback.status;

    const titleElement = document.createElement('h4');
    titleElement.textContent = feedback.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = feedback.description;

    const categoryElement = document.createElement('a');
    categoryElement.textContent = feedback.category;

    const upvotesElement = document.createElement('p');
    upvotesElement.textContent = feedback.upvotes;    

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

    roadmapDotContainerDiv.appendChild(roadmapDotDiv);
    roadmapDotContainerDiv.appendChild(statusElement);

    roadmapBoxDiv.appendChild(roadmapDotContainerDiv)
    roadmapBoxDiv.appendChild(titleElement);
    roadmapBoxDiv.appendChild(descriptionElement);
    roadmapBoxDiv.appendChild(categoryElement);

    roadmapUpvotesDiv.appendChild(upvotesElement);
    roadmapBoxFooterCommentsDiv.appendChild(commentSvg);
    roadmapBoxFooterCommentsDiv.appendChild(commentsCountElement);

    roadmapBoxFooterDiv.appendChild(roadmapUpvotesDiv);
    roadmapBoxFooterDiv.appendChild(roadmapBoxFooterCommentsDiv);

    roadmapColumnDiv.appendChild(roadmapLineDiv);
    roadmapColumnDiv.appendChild(roadmapBoxDiv);
    roadmapColumnDiv.appendChild(roadmapBoxFooterDiv);

    if (feedback.status === 'planned') {
        plannedDiv.appendChild(roadmapColumnDiv);
    } else if (feedback.status === 'in-progress') {
        progressDiv.appendChild(roadmapColumnDiv);
    } else if (feedback.status === 'live') {
        liveDiv.appendChild(roadmapColumnDiv);
    };

});
