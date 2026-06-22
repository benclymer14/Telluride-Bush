console.log("JS is connected!");
const owners = {
    austin: {
        name: "Austin Jenkings",
        role: "Owner / President",
        bio: "Assigned the President of the Bush by Dave Portnoy and Big Cat. Responsible for all major decisions and oversight of the Bush.",
        img: "Pictures/AustinJenkinsProfile.jpeg",
        insta: "https://www.instagram.com/austinjenkins77/",
        twitter: "https://x.com/AustinJenkins07?lang=en"
    },

    jerry: {
        name: "Jersey Jerry",
        role: "Co-Founder / Creator",
        bio: "Jersey Jerry was born in New Jersey in 1994 and is a lifelong Pitsburgh Steelers fan. Jerry started off as a Union pipefitter before joining the Barstool team in 2021. Jerry now does many podcasts and shows at Barstool but most important to him is growing the Unshaven Army and facilitating the best Bush placements in contests",
        img: "Pictures/JerseyJerryProfile.jpg",
        insta: "https://www.instagram.com/jerrythekid21",
        twitter: "https://x.com/Jerrythekid21?lang=en",
        youtube: "https://www.youtube.com/channel/UCMSnM6Nzua5va83YApzW86w",
        twitch: "https://www.twitch.tv/JerseyJerry"
    },
    sas: {
        name: "Lil Sasquatch",
        role: "Co-Founder / Creator",
        bio: "Lil Sasquatch, who's real name is Harry Settel, is a stand up comedian in New York City. Lil Sas was born in Massachusetts and joined Barstool in 2020 after going viral from comedy sketches. Lil Sas is part of major podcast Sun of a Boy Dad and is a major leader of the Bush and their operations.",
        img: "Pictures/LilSasProfile.jpg",
        insta: "https://www.instagram.com/lilsasquatch666",
        twitter: "https://www.twitter.com/lilsamsquanch66",
        youtube: "https://www.youtube.com/@sonofaboydad"
    },
    mook: {
        name: "Connor Mook",
        role: "Co-Founder / Creator",
        bio: "Connor Mook is a key player in the Barstool Sports universe, known for his behind-the-scenes work and contributions to various projects. He has a background in operations and logistics, making him an invaluable asset to the team.",
        img: "Pictures/ConnorMookProfile.jpg",
        insta: "https://www.instagram.com/connormook_",
        twitter: "https://x.com/ConnorMook_",
        youtube: "https://www.youtube.com/@MookCantSleep"
    }
};

function openOwner(id){
    const o = owners[id];

    document.getElementById("ownerModal").style.display = "flex";
    document.body.classList.add("modal-open");

    document.getElementById("modalImg").src = o.img;
    document.getElementById("modalName").innerText = o.name;
    document.getElementById("modalRole").innerText = o.role;
    document.getElementById("modalBio").innerText = o.bio;

    document.getElementById("insta").href = o.insta;
    document.getElementById("twitter").href = o.twitter;
    document.getElementById("youtube").href = o.youtube;
    document.getElementById("twitch").href = o.twitch;
}

function closeModal(){
    document.getElementById("ownerModal").style.display = "none";
    document.body.classList.remove("modal-open");
}