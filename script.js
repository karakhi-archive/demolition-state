
function activateArchive(e) {
    // ONLY ACTIVATE IF PROMPT IS STILL VISIBLE
    const prompt = document.getElementById('prompt');
    const archive = document.getElementById('archive');
    
    if (prompt.style.display !== 'none') {
        prompt.innerHTML = `AUTHENTICATING... <span style="color: #fff;">KARAKHI</span> VERIFIED.<br>WELCOME TO THE DEMOLITION STATE.<br>7 ARTIFACTS REMAIN.`;
        archive.style.display = 'block';

        setTimeout(() => {
            prompt.style.display = 'none';
        }, 3000);
    }
}

// PREVENT ACCIDENTAL ACTIVATION ON MOBILE SCROLL
document.addEventListener('touchstart', function(e) {
    // Only activate if they tap near the prompt, not random screen areas
    const prompt = document.getElementById('prompt');
    if (e.target === prompt || prompt.contains(e.target)) {
        activateArchive(e);
    }
});

// KEEP KEYBOARD SUPPORT
document.addEventListener('keydown', activateArchive);
// ARTIFACT CLICK HANDLING
const artifacts = document.querySelectorAll('.artifact');
const viewer = document.getElementById('viewer');
const viewerContent = document.getElementById('viewer-content');
const viewerCaption = document.getElementById('viewer-caption');

artifacts.forEach(artifact => {
    function openArtifact(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const artifactId = this.getAttribute('data-artifact');
        const caption = this.getAttribute('data-caption');

        const imagePaths = {
            '1': 'images/GLITCH_ORACLE_PROTOCOL.v1.png',
            '2': 'images/THE_CONCEPTUAL_HORSE.png',
            '3': 'images/MENTAL_AGRICULTURE_MANIFESTO.pdf.png',
            '4': 'images/DEMOLITION_DRIVE_SESSION.avi.png',
            '5': 'images/SABOTAGE_KIT_DELTA.zip.png',
            '6': 'images/UNPUBLISHED_WATSON_DECODE.img.png',
            '7': 'images/FREQUENCY_SHIFT_BLUEPRINT.txt.png'
        };

        viewerContent.innerHTML = `<img src="${imagePaths[artifactId]}" alt="Artifact ${artifactId}">`;
        viewerCaption.textContent = caption;
        viewer.style.display = 'flex';
        
        return false;
    }

    artifact.addEventListener('click', openArtifact);
    artifact.addEventListener('touchend', openArtifact);
});

// VIEWER CLOSE HANDLING
function closeViewer(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
}

viewer.addEventListener('click', closeViewer);
viewer.addEventListener('touchstart', closeViewer);

// ESCAPE KEY TO CLOSE
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        viewer.style.display = 'none';
    }
});

// EMPEROR'S FORTRESS
function activateFortress() {
    const fortress = document.getElementById('fortress');
    fortress.style.display = 'flex';
    
    const transmit = document.getElementById('transmit');
    transmit.innerHTML = '> ALL TRANSMISSIONS: TERMINATED';
    transmit.style.pointerEvents = 'none';
    transmit.style.color = '#333';
    
    setTimeout(nuclearMeltdown, 30000);
}

function nuclearMeltdown() {
    document.body.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #000; color: #f00; display: flex; justify-content: center; align-items: center; flex-direction: column; font-family: 'Courier New'; z-index: 9999;">
            <div style="font-size: 2em; margin-bottom: 20px;">> ARCHIVE SELF-DESTRUCT INITIATED</div>
            <div style="font-size: 1.2em;">> ALL ARTIFACTS PURGED</div>
            <div style="font-size: 1.2em; margin-top: 10px;">> EMPEROR'S TERMINAL: OFFLINE</div>
        </div>
    `;
}

// FORTRESS CONTROLS
document.getElementById('fortress-close').addEventListener('click', function() {
    document.getElementById('fortress').style.display = 'none';
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    activateFortress();
    return false;
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C')) {
        e.preventDefault();
        activateFortress();
        return false;
    }
});

// BLOCK TRANSMISSION LINK
document.getElementById('transmit').addEventListener('click', function(e) {
    e.preventDefault();
    activateFortress();
});

setTimeout(activateFortress, 180000);