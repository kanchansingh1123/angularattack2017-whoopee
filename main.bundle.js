webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(router, firebaseService, petManagement, loader) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.petManagement = petManagement;
        this.loader = loader;
        this.recomendedPets = null;
        this.selectedPet = null;
        this.position = 'below';
        this.notificationTip = 'Notifications';
        this.profileTip = 'Profile';
        this.logoutTip = 'Logout';
        this.nextTip = 'Next';
        this.showIntrest = 'Show Intrest';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 200;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.showLoader();
        this.petManagement.getMyPet()
            .then(function (pet) {
            _this.loader.hideLoader();
            var gender = pet.gender, oppositeGender = gender == "Male" ? "Female" : "Male";
            _this.recomendedPets = _this.petManagement.getAllPetsOfTypeAndOppositeGender(pet.type, pet.gender);
            _this.recomendedPets.subscribe(function (pets) {
                pets = pets || [];
                _this.selectedPet = pets[0];
                if (_this.selectedPet) {
                    _this.loadOwnerDetails(_this.selectedPet);
                }
            });
        })
            .catch(function (error) {
            _this.loader.hideLoader();
            console.log(error);
        });
    };
    HomePage.prototype.selectPet = function (pet) {
        this.selectedPet = pet;
        this.loadOwnerDetails(this.selectedPet);
    };
    HomePage.prototype.loadOwnerDetails = function (pet) {
        this.owner = this.firebaseService.getUserProfileDataObservable(pet.owner);
    };
    HomePage.prototype.getPetImageUrl = function (pet) {
        if (!pet) {
            //console.log(pet);
            return null;
        }
        var images = pet.images || [], image = images[0] || {};
        return image.url;
    };
    HomePage.prototype.gotoProfile = function () {
        this.router.navigateByUrl('ownerprofile');
    };
    HomePage.prototype.gotoNotification = function () {
        this.router.navigateByUrl('notification');
    };
    HomePage.prototype.logout = function () {
        // write logout functionality
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(276),
        styles: [__webpack_require__(263)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__["a" /* FirebseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__["a" /* PetManagement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__["a" /* PetManagement */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__["a" /* LoaderService */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = (function () {
    function NotificationPage(router) {
        this.router = router;
        this.position = 'below';
        this.notificationTip = 'Notifications';
        this.profileTip = 'Profile';
        this.logoutTip = 'Logout';
        this.nextTip = 'Next';
        this.showIntrest = 'Home';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 200;
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/resources/images/bios/julie-ralph.jpg',
                mobile: '9096767676'
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/resources/images/bios/juleskremer.jpg',
                mobile: '9065688676'
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/resources/images/bios/jelbourn.jpg',
                mobile: '9075445336'
            }
        ];
    }
    NotificationPage.prototype.onProfile = function () {
        this.router.navigateByUrl('ownerprofile');
    };
    NotificationPage.prototype.onHome = function () {
        this.router.navigateByUrl('home');
    };
    NotificationPage.prototype.onLogout = function () {
        //logout code
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notification',
        template: __webpack_require__(277),
        styles: [__webpack_require__(264)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NotificationPage);

var _a;
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerProfilePage = (function () {
    function OwnerProfilePage(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
        this.user = null;
        this.position = 'below';
        this.notificationTip = 'Notifications';
        this.profileTip = 'Profile';
        this.logoutTip = 'Logout';
        this.nextTip = 'Pet Profile';
        this.showIntrest = 'Home';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 200;
    }
    OwnerProfilePage.prototype.ngOnInit = function () {
        this.user = this.firebaseService.loggedInUser;
    };
    OwnerProfilePage.prototype.petProfile = function () {
        this.router.navigateByUrl('petprofile');
    };
    OwnerProfilePage.prototype.onProfile = function () {
        this.router.navigateByUrl('ownerprofile');
    };
    OwnerProfilePage.prototype.onNotifications = function () {
        this.router.navigateByUrl('notification');
    };
    OwnerProfilePage.prototype.onHome = function () {
        this.router.navigateByUrl('home');
    };
    OwnerProfilePage.prototype.logout = function () {
        // logout code
    };
    return OwnerProfilePage;
}());
OwnerProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'owner-profile',
        template: __webpack_require__(278),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__["a" /* FirebseService */]) === "function" && _b || Object])
], OwnerProfilePage);

var _a, _b;
//# sourceMappingURL=ownerprofile.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_schema__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_whoopee_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_loader_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetDetailsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PetDetailsPage = (function () {
    function PetDetailsPage(whoopeeService, router, petManagement, firebaseService, loader) {
        this.whoopeeService = whoopeeService;
        this.router = router;
        this.petManagement = petManagement;
        this.firebaseService = firebaseService;
        this.loader = loader;
        this.sliderValue = 12.5;
        this.petDetails = {};
        this.images = [];
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({});
        this.petTypes = [];
        this.position = 'below';
        this.nextTip = 'Next';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 200;
        this.ths = this;
    }
    PetDetailsPage.prototype.ngOnInit = function () {
        this.petTypes = this.whoopeeService.getPetTypes();
    };
    PetDetailsPage.prototype.next = function () {
        this.sliderValue = this.sliderValue + 12.5;
    };
    PetDetailsPage.prototype.gender = function (value) {
        this.petDetails.gender = value;
    };
    PetDetailsPage.prototype.vaccination = function (value) {
        this.petDetails.vaccination = value;
    };
    PetDetailsPage.prototype.continue = function () {
        var _this = this;
        this.petDetails.images = [];
        this.petDetails.images = this.images;
        var pet = new __WEBPACK_IMPORTED_MODULE_2__providers_utils_schema__["b" /* Pet */]();
        pet.name = this.petDetails.petName;
        pet.age = this.petDetails.petAge;
        pet.breed = this.petDetails.petBreed;
        pet.gender = this.petDetails.gender;
        pet.vaccination = this.petDetails.vaccination;
        pet.type = this.petDetails.petType;
        pet.description = this.petDetails.petDescription;
        pet.images = this.petDetails.images || [];
        this.loader.showLoader();
        this.petManagement.addNewPet(pet)
            .then(function (data) {
            _this.loader.hideLoader();
            _this.router.navigateByUrl('petprofile');
        })
            .catch(function (error) {
            _this.loader.hideLoader();
        });
        this.whoopeeService.setPetDetails(this.petDetails);
    };
    PetDetailsPage.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PetDetailsPage.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    PetDetailsPage.prototype.onFileDrop = function (files, ths) {
        var _this = this;
        this.images = [];
        var promises = [];
        for (var i = 0; i < files.length; i++) {
            promises.push(this.readFile(files[i], i));
        }
        this.loader.showLoader();
        Promise.all(promises)
            .then(function (images) {
            _this.loader.hideLoader();
            console.log(images);
        })
            .catch(function (error) {
            _this.loader.hideLoader();
            console.log(error);
        });
    };
    PetDetailsPage.prototype.readFile = function (file, index) {
        var _this = this;
        var loggedInUser = this.firebaseService.loggedInUser;
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            _this.loader.showLoader();
            reader.onload = function () {
                var dataURL = reader.result;
                _this.petManagement.uploadImage("/images/" + loggedInUser.uid + "/" + index, dataURL, "data_url")
                    .then(function (snapshot) {
                    _this.loader.hideLoader();
                    var image = new __WEBPACK_IMPORTED_MODULE_2__providers_utils_schema__["c" /* PetImage */]();
                    image.createdOn = new Date();
                    image.liked = [];
                    image.likedCount = 0;
                    image.title = file.name;
                    image.url = snapshot.downloadURL;
                    _this.images.push(image);
                    resolve(image);
                })
                    .catch(function (error) {
                    _this.loader.hideLoader();
                    reject(error);
                });
            };
            reader.readAsDataURL(file);
        });
    };
    return PetDetailsPage;
}());
PetDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'pet-details',
        template: __webpack_require__(279),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__providers_service_whoopee_service__["a" /* whoopeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_service_whoopee_service__["a" /* whoopeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__["a" /* PetManagement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__["a" /* PetManagement */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_service_firebase_service__["a" /* FirebseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_service_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_service_loader_service__["a" /* LoaderService */]) === "function" && _e || Object])
], PetDetailsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pet-details.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utils_schema__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetProfilePage = (function () {
    function PetProfilePage(router, petManagement, loader) {
        this.router = router;
        this.petManagement = petManagement;
        this.loader = loader;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
        this.isImage = false;
        this.myPet = new __WEBPACK_IMPORTED_MODULE_0__providers_utils_schema__["b" /* Pet */]();
        this.position = 'below';
        this.notificationTip = 'Notifications';
        this.profileTip = 'Profile';
        this.logoutTip = 'Logout';
        this.nextTip = 'Pet Profile';
        this.showIntrest = 'Home';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 200;
        this.genders = ['Male', 'Female'];
        this.vaccinations = ['Yes', 'No'];
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
    }
    PetProfilePage.prototype.ngOnInit = function () {
        // this.petManagement.getMyPets().subscribe((pets) => {
        // 	if(pets && pets.length > 0){
        // 		this.myPet = pets[0];
        // 	}
        // });
        this.getMyPet();
    };
    PetProfilePage.prototype.getMyPet = function () {
        var _this = this;
        this.loader.showLoader();
        this.petManagement.getMyPet()
            .then(function (pet) {
            _this.loader.hideLoader();
            _this.myPet = pet;
        })
            .catch(function (error) {
            _this.loader.hideLoader();
        });
    };
    PetProfilePage.prototype.petImages = function () {
        this.isImage = true;
    };
    PetProfilePage.prototype.onBack = function () {
        this.isImage = false;
    };
    PetProfilePage.prototype.onProfile = function () {
        this.router.navigateByUrl('ownerprofile');
    };
    PetProfilePage.prototype.onNotifications = function () {
        this.router.navigateByUrl('notification');
    };
    PetProfilePage.prototype.onHome = function () {
        this.router.navigateByUrl('home');
    };
    PetProfilePage.prototype.removePetImage = function (image) {
        var _this = this;
        if (this.myPet) {
            var images = this.myPet.images || [];
            var clonedImages_1 = images.slice(0);
            var index = images.indexOf(image);
            if (index > -1) {
                images.splice(index, 1);
                this.petManagement.updatePetDetails(this.myPet)
                    .then(function () {
                })
                    .catch(function (error) {
                    _this.myPet.images = clonedImages_1;
                    console.log(error);
                });
            }
        }
    };
    return PetProfilePage;
}());
PetProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'pet-profile',
        template: __webpack_require__(280),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__["a" /* PetManagement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_service_petmanagement_service__["a" /* PetManagement */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], PetProfilePage);

var _a, _b, _c;
//# sourceMappingURL=petprofile.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninPage = (function () {
    function SigninPage(formBuilder, firebaseService, router, loader) {
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.router = router;
        this.loader = loader;
        this.signInForm = formBuilder.group({
            'EMAIL': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)])],
            'MOBILE_NUM': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(/^[7-9][0-9]{9}$/)])],
            'PASSWORD': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.signinWithGoogle = function () {
        var _this = this;
        this.loader.showLoader();
        this.firebaseService.loginWithGoogle()
            .then(function (user) {
            _this.loader.hideLoader();
            console.log(user);
        })
            .catch(function (error) {
            _this.loader.hideLoader();
            console.log(error);
        });
    };
    SigninPage.prototype.signinWithFacebook = function () {
        var _this = this;
        this.loader.showLoader();
        this.firebaseService.loginWithFacebook()
            .then(function (user) {
            _this.loader.hideLoader();
            console.log(user);
        })
            .catch(function (error) {
            _this.loader.hideLoader();
            console.log(error);
        });
    };
    SigninPage.prototype.signin = function () {
        //this.router.navigate(["/petdetails"]);
        var formData = this.signInForm.value;
        if (formData.MOBILE_NUM) {
            this.signinWithMobile();
        }
        else {
            this.signinWithEmail();
        }
    };
    SigninPage.prototype.signinWithEmail = function () {
        var formData = this.signInForm.value, email = formData.EMAIL, password = formData.PASSWORD;
        this.firebaseService.loginWithEmail(email, password)
            .then(function () {
        })
            .catch(function (error) {
        });
    };
    SigninPage.prototype.signinWithMobile = function () {
        var _this = this;
        this.loader.showLoader();
        var formData = this.signInForm.value, mobile = formData.MOBILE_NUM, password = formData.PASSWORD;
        this.firebaseService.loginWithMobile(mobile, password)
            .then(function (data) {
            _this.loader.hideLoader();
            _this.router.navigate(["/petdetails"]);
        })
            .catch(function (error) {
            _this.loader.hideLoader();
        });
    };
    SigninPage.prototype.signup = function () {
        this.router.navigate(["/signup"]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(281),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_service_firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_service_firebase_service__["a" /* FirebseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_loader_service__["a" /* LoaderService */]) === "function" && _d || Object])
], SigninPage);

var _a, _b, _c, _d;
//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utils_schema__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(formBuilder, firebaseService, router) {
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.router = router;
        this.signUpForm = formBuilder.group({
            'NAME': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            'EMAIL': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)])],
            'MOBILE': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^[7-9][0-9]{9}$/)])],
            'PASSWORD': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]
        });
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.signUpForm.valid) {
            var formData = this.signUpForm.value;
            var user = new __WEBPACK_IMPORTED_MODULE_0__providers_utils_schema__["a" /* User */]();
            user.email = formData.EMAIL;
            user.mobile = formData.MOBILE;
            user.name = formData.NAME;
            user.password = formData.PASSWORD;
            this.firebaseService.registerUser(user)
                .then(function (o) {
                _this.router.navigate(["/petdetails"]);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    SignupPage.prototype.signin = function () {
        this.router.navigate(["/signin"]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(282),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_firebase_service__["a" /* FirebseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignupPage);

var _a, _b, _c;
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = (function () {
    function WelcomePage(router) {
        this.router = router;
    }
    WelcomePage.prototype.gotoSignIn = function () {
        this.router.navigateByUrl('signin');
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'welcome',
        template: __webpack_require__(283),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], WelcomePage);

var _a;
//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginRouteGuard = (function () {
    function LoginRouteGuard(loginService) {
        this.loginService = loginService;
    }
    LoginRouteGuard.prototype.canActivate = function () {
        return this.loginService.isLoggedIn();
    };
    return LoginRouteGuard;
}());
LoginRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object])
], LoginRouteGuard);

var _a;
//# sourceMappingURL=auth-guard-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return whoopeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var whoopeeService = (function () {
    function whoopeeService() {
        this.petTypes = [
            { name: 'Birds', value: 'Birds' },
            { name: 'Cats', value: 'Cats' },
            { name: 'Chickens', value: 'Chickens' },
            { name: 'Cows', value: 'Cows' },
            { name: 'Dogs', value: 'Dogs' },
            { name: 'Donkey', value: 'Donkey' },
            { name: 'Ducks', value: 'Ducks' },
            { name: 'Ferrets', value: 'Ferrets' },
            { name: 'Fish', value: 'Fish' },
            { name: 'Rabbits', value: 'Rabbits' },
            { name: 'Lizards', value: 'Lizards' },
            { name: 'Goats', value: 'Goats' },
            { name: 'Goose', value: 'Goose' },
            { name: 'Horses', value: 'Horses' },
            { name: 'Pigeons', value: 'Pigeons' },
            { name: 'Pigs', value: 'Pigs' },
            { name: 'Rats', value: 'Rats' },
            { name: 'Sheep', value: 'Sheep' },
            { name: 'Turkeys', value: 'Turkeys' },
            { name: 'Turtles', value: 'Turtles' }
        ];
    }
    whoopeeService.prototype.setPetDetails = function (details) {
        this.petDetails = details;
    };
    whoopeeService.prototype.getPetDetails = function () {
        return this.petDetails;
    };
    whoopeeService.prototype.getPetTypes = function () {
        return this.petTypes;
    };
    return whoopeeService;
}());
whoopeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], whoopeeService);

//# sourceMappingURL=whoopee.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(203);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_login_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(firebaseService, router, loginService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.loginService = loginService;
        this.title = 'app works!';
        this.authSubscription = null;
        this.checkLoginStatus();
    }
    AppComponent.prototype.checkLoginStatus = function () {
        var _this = this;
        this.authSubscription = this.firebaseService.authState.subscribe(function (user) {
            if (_this.authSubscription) {
                _this.authSubscription.unsubscribe();
            }
            if (user) {
                _this.loginService.setLogin(true);
                console.log(user);
                _this.router.navigate(["/home"]);
            }
            else {
                _this.loginService.setLogin(false);
                //this.router.navigate(["/signin"]);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_service_firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_service_firebase_service__["a" /* FirebseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_service_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_petmanagement_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_petdetail_pet_details__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ownerprofile_ownerprofile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_petprofile_petprofile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notification_notification__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_service_firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config_firebase_config__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_service_whoopee_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_service_loader_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_service_login_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_service_auth_guard_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//importing Routing module

//importing components








//importing services

//importing configs





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_petdetail_pet_details__["a" /* PetDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ownerprofile_ownerprofile__["a" /* OwnerProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_petprofile_petprofile__["a" /* PetProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__config_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileUploadModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__providers_service_firebase_service__["a" /* FirebseService */], __WEBPACK_IMPORTED_MODULE_23__providers_service_whoopee_service__["a" /* whoopeeService */], __WEBPACK_IMPORTED_MODULE_0__providers_service_petmanagement_service__["a" /* PetManagement */], __WEBPACK_IMPORTED_MODULE_24__providers_service_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_25__providers_service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_26__providers_service_auth_guard_service__["a" /* LoginRouteGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signin_signin__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_petdetail_pet_details__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ownerprofile_ownerprofile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_petprofile_petprofile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_auth_guard_service__ = __webpack_require__(112);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// declaring routes
var routes = [
    {
        path: '', redirectTo: '/whoopee', pathMatch: 'full'
    },
    {
        path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__pages_signin_signin__["a" /* SigninPage */]
    },
    {
        path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__["a" /* SignupPage */]
    },
    {
        path: 'petdetails', component: __WEBPACK_IMPORTED_MODULE_4__pages_petdetail_pet_details__["a" /* PetDetailsPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__providers_service_auth_guard_service__["a" /* LoginRouteGuard */]]
    },
    {
        path: 'ownerprofile', component: __WEBPACK_IMPORTED_MODULE_6__pages_ownerprofile_ownerprofile__["a" /* OwnerProfilePage */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__providers_service_auth_guard_service__["a" /* LoginRouteGuard */]]
    },
    {
        path: 'petprofile', component: __WEBPACK_IMPORTED_MODULE_7__pages_petprofile_petprofile__["a" /* PetProfilePage */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__providers_service_auth_guard_service__["a" /* LoginRouteGuard */]]
    },
    {
        path: 'notification', component: __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__providers_service_auth_guard_service__["a" /* LoginRouteGuard */]]
    },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__providers_service_auth_guard_service__["a" /* LoginRouteGuard */]]
    },
    {
        path: 'whoopee', component: __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: false })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyAzVtB8Rqnc0sElgXN2T9Q7WdpQvYYdHT8',
    authDomain: 'petmate-cbb9c.firebaseapp.com',
    databaseURL: 'https://petmate-cbb9c.firebaseio.com',
    storageBucket: 'gs://petmate-cbb9c.appspot.com',
    messagingSenderId: '763813420842'
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_schema__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FirebseService = (function () {
    function FirebseService(authProvider, dbProvider) {
        this.authProvider = authProvider;
        this.dbProvider = dbProvider;
        this.authState = null;
        this.isAuthTrackingEnabled = true;
        this.loggedInUser = null;
        this.trackAuthState();
    }
    FirebseService.prototype.disableAuthTracking = function () {
        this.isAuthTrackingEnabled = false;
    };
    FirebseService.prototype.enableAuthTracking = function () {
        this.isAuthTrackingEnabled = true;
    };
    FirebseService.prototype.trackAuthState = function () {
        var _this = this;
        this.authState = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].create(function (observer) {
            _this.authProvider.authState.subscribe(function (user) {
                if (user) {
                    var providers = user.providerData || [], provider = providers[0] || {};
                    if (provider.providerId == "password") {
                        // login from Userid and Password
                        _this.getUserProfileData(user.uid)
                            .then(function (userInstance) {
                            _this.loggedInUser = userInstance;
                            observer.next(userInstance);
                        })
                            .catch(function (error) {
                            _this.loggedInUser = null;
                            observer.error(error);
                        });
                    }
                    else {
                        // login from Google or Facebook
                        var userInstance = new __WEBPACK_IMPORTED_MODULE_4__utils_schema__["a" /* User */]();
                        userInstance.name = user.displayName;
                        userInstance.email = user.email;
                        userInstance.uid = user.uid;
                        userInstance.profileImage = user.photoURL;
                        _this.loggedInUser = userInstance;
                        observer.next(userInstance);
                    }
                }
                else {
                    _this.loggedInUser = null;
                    observer.next(null);
                }
            });
        });
    };
    FirebseService.prototype.registerUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authProvider.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(function (data) {
                user.uid = data.uid;
                //Adding user profile and a map for setting email against mobile.
                Promise.all([_this.saveUserProfile(user), _this.saveUserMobile(user)]);
                _this.saveUserProfile(user)
                    .then(function () {
                    resolve(user);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    FirebseService.prototype.saveUserProfile = function (user) {
        return this.dbProvider.object("users/profile/" + user.uid).update(user);
    };
    FirebseService.prototype.saveUserMobile = function (user) {
        return this.dbProvider.object("users/mobile/" + user.mobile).set(user.email);
    };
    FirebseService.prototype.getUserProfileData = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.object("users/profile/" + uid).subscribe(function (user) {
                if (user) {
                    delete user.password;
                    resolve(user);
                }
                else {
                    reject("No user profile data available");
                }
            });
        });
    };
    FirebseService.prototype.getUserProfileDataObservable = function (uid) {
        return this.dbProvider.object("users/profile/" + uid);
    };
    FirebseService.prototype.loginWithGoogle = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/plus.login");
        return this.authProvider.auth.signInWithPopup(provider);
    };
    FirebseService.prototype.loginWithFacebook = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].FacebookAuthProvider();
        return this.authProvider.auth.signInWithPopup(provider);
    };
    FirebseService.prototype.loginWithEmail = function (email, password) {
        return this.authProvider.auth.signInWithEmailAndPassword(email, password);
    };
    FirebseService.prototype.loginWithMobile = function (mobile, password) {
        var _this = this;
        var subscription = null;
        return new Promise(function (resolve, reject) {
            subscription = _this.dbProvider.object("users/mobile/" + mobile)
                .subscribe(function (snapshot) {
                subscription.unsubscribe();
                if (snapshot.$exists()) {
                    _this.loginWithEmail(snapshot.$value, password)
                        .then(function (data) {
                        resolve(data);
                    })
                        .catch(function (error) {
                        reject(null);
                    });
                }
                else {
                    reject(null);
                }
            });
        });
        //return this.loginWithEmail(email, password);
    };
    FirebseService.prototype.logout = function () {
        return this.authProvider.auth.signOut();
    };
    return FirebseService;
}());
FirebseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], FirebseService);

var _a, _b;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".pet-home-cls {\r\n  width: 50%;\r\n  height: 620px;\r\n  float: left;\r\n  background: #e6e4e4;\r\n}\r\n\r\n.pet-home-details {\r\n  width: 50%;\r\n  height: 620px;\r\n  float: left;\r\n  background: #3D00A5;\r\n} \r\n\r\n.pet-home-cls {  \r\n  opacity: 0.4;\r\n}\r\n\r\n.pet-img-cls {\r\n  width: 49.5%;\r\n  height: 50%;\r\n}\r\n\r\n.pet-home-dailog-cls {\r\n    position: fixed;\r\n    top: 14%;\r\n    left: 38%;\r\n    width: 25%;\r\n    height: 70%;\r\n}\r\n.pet-home-dailog-img-cls {\r\n  width: 100%;\r\n  height: 70%;\r\n}\r\n\r\n.pet-home-details-info  {\r\n  color: #9a9797;\r\n  font-family: sans-serif;\r\n  margin-top: 21%;\r\n  margin-left: 35%;\r\n}\r\n\r\n.pet-owner-details-cls {\r\n  font-size: 24px;\r\n}\r\n\r\n.pet-name-cls{\r\n    background-color: #06e9f4;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    color: blue;\r\n    line-height: 60px;\r\n}\r\n\r\n.pet-owner-header-cls {\r\n  font-size: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.pet-home-nxt-btn-cls {\r\n  margin-left: 72%;\r\n}\r\n\r\n.pet-notications-cls {\r\n  float: right;\r\n  margin:2%;\r\n}\r\n\r\n.pet-home-chat-cls {\r\n  position: absolute;\r\n  right: 10%;\r\n  top: 70%;\r\n}\r\n.pet-home-interest-cls{\r\n  position: absolute;\r\n  right: 13%;\r\n  top: 62%;\r\n}\r\n\r\n.pet-home-interest-cls span {\r\n    color: black;\r\n    position: absolute;\r\n    right: 100%;\r\n    top: 6%;\r\n    margin-right: 15%;\r\n}\r\n\r\n.next-image-button{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.next-image-cls{\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-top: 10px;\r\n}\r\n.next-button-div{\r\n    float: right;\r\n    margin-right: 15%;\r\n}\r\n\r\n.image-button-cls{\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.notification-image-cls{\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-top: 10px\r\n}\r\n\r\n.profile-image-cls{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.show-love-img{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.pet-discpription-cls{\r\n    background-color: #3D00A5;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding: 20px 0;\r\n}\r\n.profile-iconcls{\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.demo-tooltip {\r\n  .centered {\r\n    text-align: center;\r\n    height: 200px;\r\n    overflow: auto;\r\n\r\n    button {\r\n      margin: 16px;\r\n    }\r\n  }\r\n  .mat-radio-button {\r\n    display: block;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "/*.demo {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n\r\n  .mat-list, .mat-nav-list {\r\n    border: 1px solid rgba(0, 0, 0, 0.12);\r\n    width: 350px;\r\n    margin: 20px 20px 0 0;\r\n\r\n  }\r\n  h2 {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .mat-icon {\r\n    color: rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n  .mat-list-icon {\r\n    color: white;\r\n    background: rgba(0, 0, 0, 0.3);\r\n  }\r\n}\r\n\r\n.demo-secondary-text {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}*/\r\n.ownprofile-title{\r\n  color:white;\r\n}\r\n.toolbar-color{\r\n  background: #3D00A5;\r\n}\r\n.align-right{\r\n  float: right;\r\n  margin-right: 10px;\r\n}\r\n.contents{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.list-items{\r\n  background: white;\r\n  margin: 1% 15%;\r\n}\r\n.touch-background{\r\n  background:#5AFFFF;\r\n  color:#3D00A5;\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  padding: 0.5% 1%;\r\n  text-align: center;\r\n}\r\n.touch-background span{\r\n  font-size:12px;\r\n}\r\n.background-color-blue{\r\n    background-color: #3D00A5 !important;\r\n}\r\n.toolbar-div-cls{\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n.ownprofile-title{\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    line-height: 75px;\r\n    color: #fff;\r\n    margin-left: 10%;\r\n}\r\n.header-icon-cls{\r\n  float: right;\r\n  margin-right: 10px;\r\n}\r\n.image-button-cls{\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.notification-image-cls{\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-top: 10px\r\n}\r\n.profile-image-cls{\r\n  width: 50px;\r\n  height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.card-content-divcls {\r\n    background-color: #fff;\r\n    padding: 6%;\r\n    margin-left: 18%;\r\n\r\n}\r\n\r\n.mat-input-placeholder .mat-float{\r\n  padding-left: 16px;\r\n  color: #153c5f;\r\n}\r\n.mat-input-element{\r\n  color: #153c5f;\r\n}\r\n\r\n.mat-card-content{\r\n    font-size: 20px;\r\n}\r\n\r\n.ownprofile-title{\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    line-height: 75px;\r\n    color: #fff;\r\n    margin-left: 10%;\r\n}\r\n\r\n.mat-input-wrapper .mat-input-underline{\r\n    border-color: rgba(255, 255, 255, 0.45) !important;\r\n}\r\n.profile-cardcls{\r\n    box-shadow: none !important;\r\n    margin-left: 3%;\r\n    margin-top: 9%;\r\n    margin-right: 3%;\r\n}\r\n\r\n.profile-imgcls{\r\n    width: 40%;\r\n    height: 40%;\r\n    margin-top: 30% !important;\r\n}\r\n\r\n.pet-profile-title{\r\n    margin-top: 10px;\r\n    color: #9b9090;\r\n}\r\n\r\n.background-color-blue{\r\n    background-color: #3D00A5 !important;\r\n}\r\n\r\n.toolbar-div-cls{\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n.header-icon-cls{\r\n  float: right;\r\n  margin-right: 10px;\r\n}\r\n\r\n.image-button-cls{\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.notification-image-cls{\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-top: 10px\r\n}\r\n\r\n.profile-image-cls{\r\n    width: 35px;\r\n    height: 35px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.main-div-cls{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-top: 5%;\r\n}\r\n\r\n.card-cls-div{\r\n  box-shadow: none !important;\r\n  width: 100%;\r\n}\r\n\r\n.input-cls-width{\r\n  width: 100%;\r\n  margin-bottom: 3%\r\n}\r\n.input-padding-left{\r\n  padding-left: 16px\r\n}\r\n\r\n.next-image-cls{\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-top: 10px;\r\n}\r\n.next-image-button{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n\r\n.demo-grid-list {\r\n  width: 1100px;\r\n\r\n  .mat-card {\r\n    margin: 16px 0;\r\n  }\r\n\r\n  p {\r\n    margin: 16px;\r\n  }\r\n\r\n  .demo-basic-list .mat-grid-tile {\r\n    background: red;\r\n  }\r\n\r\n  img {\r\n    width: 350px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".slider-width{\r\n\twidth: 80%;\r\n\tleft: 10%;\r\n}\r\n\r\n.form-alignments{\r\n\ttext-align: center;\r\n}\r\n\r\n.input-alignments{\r\n\twidth: 55%; \r\n\tmargin-top: 5%; \r\n\tfont-size: 2em;\r\n}\r\n\r\n.select-alignments{\r\n\twidth: 55%; \r\n\tmargin-top: 10%; \r\n\tfont-size: 2em;\r\n}\r\n\r\n.title{\r\n\ttext-align: center;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.button-default-background{\r\n\tbackground: #808080;\r\n\tcolor:#d3d3d3;\r\n}\r\n\r\n.activate{\r\n\tcolor:#3D00A5;\r\n}\r\n\r\n.next{\r\n\tbackground: #000000;\r\n}\r\n\r\n.next-gender-vaccination{\r\n\tfloat: right;\r\n    margin-right: 20%;\r\n    margin-top: -6%;\r\n}\r\n\r\n.gender-vaccination-title{\r\n\tmargin-left:27%;\r\n}\r\n\r\n.gender-vaccination-buttons{\r\n\twidth:58%; text-align:right; float:left;\r\n}\r\n\r\n.gender-vaccination-next{\r\n\twidth:40%; text-align:left; float:right;\r\n}\r\n\r\n.text-color{\r\n\tcolor: #ffffff !important;\r\n}\r\n\r\n.input-container{\r\n\tfloat:left; \r\n\ttext-align: right; \r\n\twidth:70%;\r\n}\r\n\r\n.input-container-button{\r\n\twidth:30%; \r\n\tfloat:right; \r\n\ttext-align: left; \r\n\tmargin-top:4%;\r\n}\r\n\r\n.next-text-align{\r\n\tmargin-left:8%;\r\n}\r\n\r\n.next-margin{\r\n\tmargin-left:5%;\r\n\tmargin-top:3%;\r\n}\r\n\r\n.my-drop-zone { border: dotted 3px lightgray; }\r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }\r\n\r\n.male{\r\n\tmargin-right: 5%;\r\n\twidth:24%; \r\n\theight: 50px;\r\n\tfont-size: 2em;\r\n}\r\n\r\n.female{\r\n\tfont-size: 2em;\r\n\twidth:24%; \r\n\theight: 50px;\r\n}\r\n\r\n.upload-image-text{\r\n\tline-height: 80px;\r\n}\r\n\r\n.drag-drop{\r\n\tmin-height:240px; \r\n\twidth:50%; \r\n\tmargin-left:20%; \r\n\tmargin-top: 4%; \r\n\tfloat:left; \r\n\ttext-align: center; \r\n\tfont-size:2.5em;\r\n}\r\n\r\n.next-image{\r\n\theight: 40px;\r\n\twidth: 40px;\r\n\tmargin-top: 8px;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.drag-drop-image{\r\n\tmargin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\r\n.card-content-divcls {\r\n    background-color: #fff;\r\n    padding: 6%;\r\n    margin-left: 16%;\r\n    margin-top: 0% !important;\r\n}\r\n\r\n.mat-input-placeholder .mat-float{\r\n  padding-left: 16px;\r\n  color: #153c5f;\r\n}\r\n.mat-input-element{\r\n  color: #153c5f;\r\n}\r\n\r\n.mat-card-content{\r\n    font-size: 20px;\r\n}\r\n\r\n.background-color-blue{\r\n    background-color: #3D00A5  !important;\r\n}\r\n\r\n.ownprofile-title{\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    line-height: 75px;\r\n    color: #fff;\r\n    margin-left: 10%;\r\n}\r\n\r\n.mat-input-wrapper .mat-input-underline{\r\n    border-color: rgba(255, 255, 255, 0.45) !important;\r\n}\r\n.profile-cardcls{\r\n    box-shadow: none !important;\r\n    margin-left: 4%;\r\n    margin-top: 14%;\r\n    margin-right: 2%;\r\n}\r\n\r\n.profile-imgcls{\r\n    width: 40%;\r\n    height: 20%;\r\n    margin-top: 120% !important;\r\n    cursor: pointer;\r\n}\r\n\r\n.pet-profile-title{\r\n    color: #9b9090;\r\n    cursor: pointer;\r\n}\r\n\r\n.mat-select-value{\r\n    color: rgba(255, 255, 255, 0.45) !important;\r\n}\r\n\r\n.remove-button-cls{\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n    z-index: 10;\r\n}\r\n\r\n.toolbar-div-cls{\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n.header-icon-cls{\r\n  float: right;\r\n  margin-right: 10px;\r\n}\r\n\r\n.image-button-cls{\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n.notification-image-cls{\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-top: 10px\r\n}\r\n\r\n.profile-image-cls{\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.next-image-cls{\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-top: 10px;\r\n}\r\n.next-image-button{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.input-cls-width{\r\n  width: 100%;\r\n  margin-bottom: 3%\r\n}\r\n.input-cls-width-select{\r\n   width: 100%;\r\n   margin-bottom: 4%\r\n}\r\n\r\n.input-padding-left{\r\n  padding-left: 16px\r\n}\r\n\r\n.card-cls-div{\r\n  box-shadow: none !important;\r\n  width: 100%;\r\n}\r\n.main-div-cls{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin-top: 5%;\r\n}\r\n.image-list-div{\r\n    box-shadow: none !important;\r\n    margin-top: 5%;\r\n}\r\n.back-image-cls{\r\n    position: absolute;\r\n    left: 8px;\r\n    margin-top: 10px;\r\n}\r\n.profile-iconcls{\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n.demo-grid-list {\r\n  width: 1100px;\r\n\r\n  .mat-card {\r\n    margin: 16px 0;\r\n  }\r\n\r\n  p {\r\n    margin: 16px;\r\n  }\r\n\r\n  .demo-basic-list .mat-grid-tile {\r\n    background: red;\r\n  }\r\n\r\n  img {\r\n    width: 350px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "/* signin css */\r\n.set-font{\r\n  font-size: 25px;\r\n  color: white;\r\n  font-family: sans-serif;\r\n}\r\n.set-background{\r\n  background:#3D00A5;\r\n  color: white;\r\n  border-radius: 0px;\r\n}\r\n/*.vertical-divider {\r\n  position: absolute;\r\n  border-right: 3px solid #9b9090;\r\n  top: 40%;\r\n  bottom: 20%;\r\n  left: 50%;\r\n}*/\r\n.full-width{\r\n  width: 100%;\r\n}\r\n.form-width{\r\n  width: 50%;\r\n}\r\n.error-msg{\r\n  color:red;\r\n   font-size: 14px;\r\n}\r\n.fields-background{\r\n  background: white;\r\n}\r\n.social-buttons{\r\n  background:#8FFFEC;\r\n  width:25%!important;\r\n}\r\n.align-buttons{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "/* signup css */\r\n.set-font{\r\n  font-size: 25px;\r\n  color: white;\r\n  font-family: sans-serif;\r\n}\r\n.set-background{\r\n  background: #3D00A5;\r\n  color: white;\r\n  border-radius: 0px;\r\n}\r\n/*.vertical-divider {\r\n  position: absolute;\r\n  border-right: 3px solid #9b9090;\r\n  top: 40%;\r\n  bottom: 20%;\r\n  left: 50%;\r\n}*/\r\n.full-width{\r\n  width: 100%;\r\n}\r\n.form-width{\r\n  width: 50%;\r\n}\r\n.error-msg{\r\n  color:red;\r\n   font-size: 14px;\r\n}\r\n.fields-background{\r\n  background: white;\r\n}\r\n.social-buttons{\r\n  background:#8FFFEC;\r\n  width:25%!important;\r\n}\r\n.align-buttons{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".main-dev {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.center-main {\r\n\tposition: absolute;\r\n    top: 25%;\r\n    left: 25%;\r\n}\r\n\r\n.big-font {\r\n\tcolor: white;\r\n\tfont-size: 60px;\r\n}\r\n\r\n.medium-font {\r\n\tcolor: white;\r\n\tfont-size: xx-large;\r\n}\r\n\r\n.small-text {\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.sub-text {\r\n\ttext-align: center;\r\n\tmargin-top: 50px;\r\n\tcolor: white;\r\n}\r\n\r\n.love-image {\r\n\tmargin-bottom: -50px;\r\n}\r\n\r\n.buttons {\r\n\ttext-align: center;\r\n\tmargin-top: 30px;\r\n}\r\n\r\n.pet-button-images {\r\n\theight: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.pet-button-size {\r\n\theight: 70px;\r\n    width: 70px;\r\n}\r\n\r\n.pet-button-flirt {\r\n\theight: 70px;\r\n    width: 150px;\r\n    color: blue;\r\n    font-size: large;\r\n    font-weight: 600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<div class=\"pet-home\">\r\n\r\n  <div class=\"pet-home-cls\">\r\n    <img \r\n      class=\"pet-img-cls\" \r\n      *ngFor=\"let pet of recomendedPets | async\"\r\n      (click)=\"selectPet(pet)\"\r\n      [src]=\"getPetImageUrl(pet)\" \r\n    />\r\n    <!--<img class=\"pet-img-cls\" src=\"../assets/images/pet-images/images2.gif\" />\r\n    <img class=\"pet-img-cls\" src=\"../assets/images/pet-images/images3.gif\" />\r\n    <img class=\"pet-img-cls\" src=\"../assets/images/pet-images/images4.gif\" />-->\r\n  </div>  \r\n\r\n  <div class=\"pet-home-dailog-cls\">\r\n    <div class=\"pet-name-cls\">{{selectedPet?.name}}</div>\r\n    <img alt=\"Pet Image\" class=\"pet-home-dailog-img-cls\" [src]=\"getPetImageUrl(selectedPet)\" />\r\n    <button [mdTooltip]=\"showIntrest\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls pet-home-chat-cls light-green\" >\r\n            <img src=\"../assets/images/Show-Love.svg\" class=\"show-love-img\" alt=\"Pet Image\">\r\n        </button>\r\n\r\n    <div class=\"pet-discpription-cls\">I'm 5 yeas old male lab and I got vaccinated</div>\r\n  </div>\r\n\r\n  <div class=\"pet-home-details\">\r\n<!--     <div class=\"pet-notications-cls\">\r\n      <button [mdTooltip]=\"logoutTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"logout()\">\r\n            <img src=\"../assets/images/logout.svg\" class=\"notification-image-cls\" >\r\n      </button>\r\n    </div> -->\r\n    <div class=\"pet-notications-cls\">\r\n      <button [mdTooltip]=\"profileTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"gotoProfile()\">\r\n            <img src=\"../assets/images/profile-icon.svg\"  class=\"profile-iconcls\" >\r\n        </button>\r\n    </div>\r\n    <div class=\"pet-notications-cls\">\r\n      <button [mdTooltip]=\"notificationTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"gotoNotification()\">\r\n            <img src=\"../assets/images/Notifications.svg\" class=\"notification-image-cls\" >\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"pet-home-details-info\">\r\n      <div class=\"pet-owner-header-cls\">Pet Details</div>\r\n      <div class=\"pet-owner-details-cls\">\r\n        <div>Gender : {{selectedPet?.gender}}</div>\r\n        <div>Age : {{selectedPet?.age}} Years</div>\r\n        <div>Breed : {{selectedPet?.breed}}</div>\r\n        <div>Vaccination : {{selectedPet?.vaccination}}</div>\r\n      </div>\r\n\r\n      <div class=\"next-button-div\">\r\n        <button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"next-image-button light-green\" (click)=\"petImages()\">\r\n          <img src=\"../assets/images/next.svg\"  class=\"next-image-cls\" >\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"pet-owner-header-cls\">Owner Details</div>\r\n      <div class=\"pet-owner-details-cls\">\r\n        <div>{{(owner | async)?.name}}</div>\r\n        <div>{{(owner | async)?.mobile}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"background-color-blue\">\r\n<div class=\"toolbar-div-cls\">\r\n\r\n  <span class=\"ownprofile-title\"> Owner Profile </span>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"logoutTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onLogout()\">\r\n            <img src=\"../assets/images/logout.svg\" class=\"notification-image-cls\" >\r\n        </button>\r\n    </div>    \r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"profileTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onProfile()\">\r\n            <img src=\"../assets/images/profile-icon.svg\" class=\"notification-image-cls\" >\r\n        </button>\r\n    </div>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"showIntrest\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onHome()\">\r\n            <img src=\"../assets/images/Profile.svg\"  class=\"profile-image-cls\" >\r\n        </button>\r\n    </div>\r\n</div>\r\n</md-toolbar>\r\n<md-list>\r\n  <md-list-item *ngFor=\"let message of messages\"  class='list-items'>\r\n    <img md-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\r\n    <h4 md-line>{{message.from}}</h4>\r\n    <p md-line>\r\n      <span>{{message.subject}} -- </span>\r\n      <span class=\"demo-secondary-text\">{{message.message}}</span>\r\n    </p>\r\n    <div class='touch-background'>Get in Touch\r\n      <span>{{message.mobile}}</span>\r\n    </div>\r\n  </md-list-item>\r\n</md-list>"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"background-color-blue\">\r\n<div class=\"toolbar-div-cls\">\r\n\t<span class=\"ownprofile-title\"> Owner Profile </span>\r\n\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"logoutTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"logout()\">\r\n            <img src=\"../assets/images/logout.svg\"  class=\"profile-image-cls\" >\r\n        </button>\r\n    </div>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"notificationTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onNotifications()\">\r\n            <img src=\"../assets/images/Notifications.svg\" class=\"notification-image-cls\" >\r\n        </button>\r\n    </div>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"showIntrest\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onHome()\">\r\n            <img src=\"../assets/images/Profile.svg\"  class=\"profile-image-cls\" >\r\n        </button>\r\n    </div>\r\n</div>\r\n</md-toolbar>\r\n\r\n<div class=\"main-div-cls\">\r\n    <md-card class=\"background-color-blue card-cls-div\">\r\n        <md-card-content class=\"demo-ratio-list card-content-divcls\">\r\n        <md-grid-list cols=\"1\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\r\n            <md-input-container class=\"demo-full-width input-cls-width\" >\r\n                <input class=\"test\" mdInput placeholder=\"Name\" class=\"input-padding-left\" [(ngModel)]=\"user.name\">\r\n            </md-input-container>\r\n            <md-input-container class=\"demo-full-width input-cls-width\">\r\n                <input mdInput placeholder=\"Mobile No\" class=\"input-padding-left\" [(ngModel)]=\"user.mobile\">\r\n            </md-input-container>\r\n            <md-input-container class=\"demo-full-width\" style=\"width: 100%\">\r\n                <input mdInput placeholder=\"Email\" class=\"input-padding-left\" [(ngModel)]=\"user.email\">\r\n            </md-input-container>\r\n        </md-grid-list>\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n    <md-card class=\"profile-cardcls background-color-blue\">\r\n         <md-card-title class=\"pet-profile-title\">\r\n            <button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"next-image-button light-green\" (click)=\"petProfile()\">\r\n              <img src=\"../assets/images/next.svg\"  class=\"next-image-cls\" >\r\n            </button>\r\n         </md-card-title>\r\n    </md-card>\r\n<div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div>\r\n\t<h2 class=\"title\">Pet Details</h2>\r\n</div>\r\n<md-slider color=\"primary\" value='{{sliderValue}}' class=\"slider-width\"></md-slider>\r\n<div>\r\n\t<div class=\"form-alignments\">\r\n\t\t<div *ngIf=\"sliderValue == 12.5\">\r\n\t\t<div class=\"input-container\">\r\n\t\t<md-input-container class=\"full-width input-alignments\">\r\n\t\t\t<input mdInput placeholder=\"Pet Name\" class=\"text-color\" [(ngModel)]=\"petDetails.petName\">\r\n\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"petDetails.petName\" class=\"input-container-button\">\r\n\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab (click)=\"next()\" class=\"next-margin light-green\">\r\n\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"sliderValue == 25\">\r\n\t\t<div class=\"input-container\">\r\n\t\t<md-input-container class=\"full-width input-alignments\">\r\n\t\t\t<input type=\"number\" mdInput placeholder=\"Pet's Age\" class=\"text-color\" [(ngModel)]=\"petDetails.petAge\">\r\n\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"petDetails.petAge\" class=\"input-container-button\">\r\n\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab (click)=\"next()\" class=\"next-margin light-green\">\r\n\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"sliderValue == 37.5\">\r\n\t\t<div class=\"input-container\">\r\n\t\t<md-input-container class=\"full-width input-alignments\">\r\n\t\t\t<input mdInput placeholder=\"Pet's Breed\" class=\"text-color\" [(ngModel)]=\"petDetails.petBreed\">\r\n\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"petDetails.petBreed\" class=\"input-container-button\">\r\n\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab (click)=\"next()\" class=\"next-margin light-green\">\r\n\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"sliderValue == 50\">\r\n\t\t<div><h3 class=\"gender-vaccination-title text-color\">Sex</h3></div>\r\n\t\t<div class=\"form-alignments\">\r\n\t\t<div class=\"gender-vaccination-buttons\">\r\n\t\t\t<button md-raised-button class=\"button-default-background male\" [ngClass]=\"{'light-green': petDetails.gender == 'Male',  'activate': petDetails.gender == 'Male'}\" (click)=\"gender('Male')\">Male</button>\r\n\t\t\t<button md-raised-button class=\"button-default-background female\" [ngClass]=\"{'light-green': petDetails.gender == 'Female',  'activate': petDetails.gender == 'Female'}\" (click)=\"gender('Female')\">Female</button>\r\n\t\t</div>\r\n\t\t<div class=\"gender-vaccination-next\" *ngIf=\"petDetails.gender\">\r\n\t\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab style=\"margin-top:-5px;\" class=\"next-margin light-green\" (click)=\"next()\">\r\n\t\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"sliderValue == 62.5\">\r\n\t\t<div><h3 class=\"gender-vaccination-title text-color\">Vaccination</h3></div>\r\n\t\t<div class=\"form-alignments\">\r\n\t\t<div class=\"gender-vaccination-buttons\">\r\n\t\t\t<button md-raised-button class=\"button-default-background male\" [ngClass]=\"{'light-green': petDetails.vaccination == 'Done' , 'activate': petDetails.vaccination == 'Done'}\" (click)=\"vaccination('Done')\">Done</button>\r\n\t\t\t<button md-raised-button class=\"button-default-background female\" [ngClass]=\"{'light-green': petDetails.vaccination == 'No', 'activate': petDetails.vaccination == 'No'}\" (click)=\"vaccination('Nope')\">Nope</button>\r\n\t\t</div>\r\n\t\t<div class=\"gender-vaccination-next\" *ngIf=\"petDetails.vaccination\">\r\n\t\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab style=\"margin-top:-5px;\" class=\"next-margin light-green\" (click)=\"next()\">\r\n\t\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"sliderValue == 75\">\r\n\t\t<div class=\"input-container\">\r\n\t\t<md-select placeholder=\"Pet Type\" name=\"petType\" class=\"select-alignments text-color\" [(ngModel)]=\"petDetails.petType\">    \r\n                    <md-option *ngFor=\"let type of petTypes\" [value]=\"type.value\">{{type.name}}</md-option> \r\n        </md-select>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"petDetails.petType\" class=\"input-container-button\">\r\n\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab (click)=\"next()\" class=\"next-margin light-green\">\r\n\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"sliderValue == 87.5\">\r\n\t\t<div class=\"input-container\">\r\n\t\t<md-input-container class=\"full-width input-alignments\">\r\n\t\t\t<input mdInput placeholder=\"Pet Description\" class=\"text-color\" [(ngModel)]=\"petDetails.petDescription\">\r\n\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"petDetails.petDescription\" class=\"input-container-button\">\r\n\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab (click)=\"next()\" class=\"next-margin light-green\">\r\n\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"sliderValue == 100\">\r\n\t\t<div class=\"form-alignments\">\r\n\t\t<div>\r\n\t\t\t<div ng2FileDrop \r\n              [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                 (fileOver)=\"fileOverBase($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone text-color drag-drop\"\r\n                 (onFileDrop)=\"onFileDrop($event, ths)\"\r\n                 >\r\n\t\t\t\t <img src='../assets/images/uploadimage.svg' class=\"drag-drop-image\" alt=\"next\">\r\n\t\t\t\t <p class=\"upload-image-text\">Drag &amp; Drop your pet images.<br/> Upto 5 images</p>     \r\n            </div>\r\n\t\t\t<div *ngIf=\"images.length == 5\" style=\"width: 25%; float: right; text-align: left;\">\r\n\t\t\t<button [mdTooltip]=\"nextTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab style=\"margin-top:50%\" class=\"light-green\" (click)=\"continue()\">\r\n\t\t\t\t<img src='../assets/images/next.svg' class=\"next-image\" alt=\"next\">\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "\r\n<md-toolbar class=\"background-color-blue\">\r\n<div class=\"toolbar-div-cls\">\r\n\r\n\t<button md-mini-fab *ngIf=\"isImage\" (click)=\"onBack()\" class=\"back-image-cls\">\r\n            <md-icon>undo</md-icon>\r\n        </button>\r\n\r\n\t<span class=\"ownprofile-title\"> Pet Profile </span>\r\n\r\n     <div class=\"header-icon-cls\">\r\n    <button [mdTooltip]=\"logoutTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"logout()\">\r\n            <img src=\"../assets/images/logout.svg\"  class=\"profile-image-cls\" >\r\n        </button>\r\n     </div>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"profileTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onProfile()\">\r\n            <img src=\"../assets/images/profile-icon.svg\"  class=\"profile-iconcls\" >\r\n        </button>\r\n    </div>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"notificationTip\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onNotifications()\">\r\n            <img src=\"../assets/images/Notifications.svg\" class=\"notification-image-cls\" >\r\n        </button>\r\n    </div>\r\n    <div class=\"header-icon-cls\">\r\n        <button [mdTooltip]=\"showIntrest\"\r\n            [mdTooltipPosition]=\"position\"\r\n            [mdTooltipDisabled]=\"disabled\"\r\n            [mdTooltipShowDelay]=\"showDelay\"\r\n            [mdTooltipHideDelay]=\"hideDelay\" md-fab class=\"image-button-cls light-green\" (click)=\"onHome()\">\r\n            <img src=\"../assets/images/Profile.svg\"  class=\"profile-image-cls\" >\r\n        </button>\r\n    </div>\r\n</div>\r\n</md-toolbar>\r\n\r\n<div class=\"main-div-cls\"  *ngIf=\"!isImage\">\r\n\r\n    <md-card class=\"background-color-blue card-cls-div\">\r\n        <md-card-content class=\"demo-ratio-list card-content-divcls\">\r\n        <md-grid-list cols=\"1\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\r\n            <md-input-container class=\"demo-full-width\" class=\"input-cls-width\">\r\n                <input mdInput placeholder=\"Pet Name\" class=\"input-padding-left\" [(ngModel)]=\"myPet.name\">\r\n            </md-input-container>\r\n            <md-input-container class=\"demo-full-width\" class=\"input-cls-width\">\r\n                <input mdInput placeholder=\"Age\"  class=\"input-padding-left\" [(ngModel)]=\"myPet.age\">\r\n            </md-input-container>\r\n            <md-input-container class=\"demo-full-width\" class=\"input-cls-width\">\r\n                <input mdInput placeholder=\"Breed\"  class=\"input-padding-left\" [(ngModel)]=\"myPet.breed\">\r\n            </md-input-container>\r\n            <md-select placeholder=\"Sex\" name=\"sex\" class=\"input-cls-width-select\" [(ngModel)]=\"myPet.gender\">    \r\n                    <md-option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}    </md-option> \r\n            </md-select>\r\n            <md-select placeholder=\"Vaccination\" name=\"Vaccination\" style=\"width: 100%;\" [(ngModel)]=\"myPet.vaccination\">    \r\n                    <md-option *ngFor=\"let vaccination of vaccinations\" [value]=\"vaccination\">{{vaccination}}    </md-option> \r\n            </md-select>\r\n        </md-grid-list>\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n    <md-card class=\"profile-cardcls background-color-blue\">   \r\n        <md-card-title class=\"pet-profile-title\">\r\n            <button md-fab class=\"next-image-button light-green\" (click)=\"petImages()\">\r\n              <img src=\"../assets/images/next.svg\"  class=\"next-image-cls\" >\r\n            </button>\r\n        </md-card-title>\r\n    </md-card>\r\n</div>\r\n\r\n\r\n\r\n\r\n<md-card *ngIf=\"isImage\" class=\"background-color-blue image-list-div\">\r\n    <md-card-content>\r\n      <md-grid-list cols=\"5\" rowHeight=\"200px\">\r\n        <md-grid-tile *ngFor=\"let image of myPet.images;\">\r\n          <img [alt]=\"image.title\" [src]=\"image.url\">\r\n          <button md-mini-fab class=\"remove-button-cls light-green\" (click)=\"removePetImage(image)\">\r\n            <md-icon class=\"md-24\">clear</md-icon>\r\n          </button>\r\n        </md-grid-tile>\r\n      </md-grid-list>\r\n    </md-card-content>\r\n  </md-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  "

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<!-- START  SIGIN PAGE -->\r\n<md-grid-list cols=\"5\" rowHeight=\"80px\">\r\n   <!-- START HEADING-->\r\n   <md-grid-tile class='set-font'[colspan]=\"5\" [rowspan]=\"2\">Sign In\r\n   </md-grid-tile>\r\n   <!-- END HEADING-->\r\n   <!-- SIGNIN FIELDS-->\r\n   <md-grid-tile [colspan]=\"1\" [rowspan]=\"4\"></md-grid-tile>\r\n   <md-grid-tile [colspan]=\"2\" [rowspan]=\"4\" class='fields-background'>\r\n   <form name='signInForm' class='form-width'>\r\n      <md-input-container class=\"full-width\">\r\n         <input mdInput placeholder=\"Email\" [formControl]='signInForm.controls[\"EMAIL\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signInForm.controls['EMAIL'].invalid && signInForm.controls['EMAIL'].touched\">Please enter valid Email.</span><br/>\r\n      <md-input-container class=\"full-width\">\r\n         <input mdInput placeholder=\"Mobile No\" [formControl]='signInForm.controls[\"MOBILE_NUM\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signInForm.controls['MOBILE_NUM'].invalid && signInForm.controls['MOBILE_NUM'].touched\">Please enter valid Mobile Number.</span><br/>\r\n      <md-input-container class=\"full-width\">\r\n         <input mdInput type='password' placeholder=\"Enter Password\" [formControl]='signInForm.controls[\"PASSWORD\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signInForm.controls['PASSWORD'].hasError('required') && signInForm.controls['PASSWORD'].touched\">This field is required.</span>\r\n      <div class='align-buttons'>\r\n         <button md-raised-button \r\n         class='set-background' \r\n         [disabled]='!signInForm.valid'\r\n         (click)=\"signin()\"\r\n         >\r\n         Sign In\r\n         </button>\r\n         &nbsp;\r\n         <button md-raised-button \r\n            class='set-background' \r\n            (click)=\"signup()\"\r\n            >\r\n         Sign Up\r\n         </button>\r\n      </div>\r\n   </form>\r\n   </md-grid-tile>\r\n   <!--END SIGNIN FIELDS-->\r\n   <!--START SOCIAL BUTTONS-->\r\n   <md-grid-tile [colspan]=\"1\" [rowspan]=\"4\" class='social-buttons'>\r\n   <md-list>\r\n      <md-list-item>\r\n         <button md-raised-button class='set-background' (click)=\"signinWithFacebook()\" >Continue with Facebook</button>\r\n      </md-list-item>\r\n      <md-list-item>\r\n         <button md-raised-button class='set-background' (click)=\"signinWithGoogle()\" >Continue with Google</button>\r\n      </md-list-item>\r\n   </md-list>\r\n   </md-grid-tile>\r\n\r\n   <!--END SOCIAL BUTTONS-->\r\n</md-grid-list>\r\n<!-- END  SIGIN PAGE -->"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<!-- START  SIGNUP PAGE -->\r\n<md-grid-list cols=\"5\" rowHeight=\"90px\">\r\n   <!-- START HEADING-->\r\n   <md-grid-tile class='set-font' [colspan]=\"5\" [rowspan]=\"2\">Sign Up\r\n   </md-grid-tile>\r\n   <!-- END HEADING-->\r\n   <!-- SIGNUP FIELDS-->\r\n   <md-grid-tile [colspan]=\"1\" [rowspan]=\"4\"></md-grid-tile>\r\n   <md-grid-tile [colspan]=\"2\" [rowspan]=\"4\" class='fields-background'>\r\n   <form class=\"form-width\" name='signUpForm'>\r\n      <md-input-container class=\"full-width\">\r\n         <input mdInput placeholder=\"Name\" [formControl]='signUpForm.controls[\"NAME\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signUpForm.controls['NAME'].hasError('required') && signUpForm.controls['NAME'].touched\">This field is required.</span>\r\n      <br/>\r\n      <md-input-container class=\"full-width\">\r\n         <input mdInput placeholder=\"Email\" [formControl]='signUpForm.controls[\"EMAIL\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signUpForm.controls['EMAIL'].invalid && signUpForm.controls['EMAIL'].touched\">Please enter valid Email.</span><br/>\r\n      <md-input-container class=\"full-width\" >\r\n         <input mdInput placeholder=\"Mobile No\" [formControl]='signUpForm.controls[\"MOBILE\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signUpForm.controls['MOBILE'].invalid && signUpForm.controls['MOBILE'].touched\">Please enter valid Mobile Number.</span><br/>\r\n      <md-input-container class=\"full-width\">\r\n         <input mdInput type='password'  placeholder=\"Create Password\" [formControl]='signUpForm.controls[\"PASSWORD\"]'>\r\n      </md-input-container>\r\n      <span class='error-msg' *ngIf=\"signUpForm.controls['PASSWORD'].hasError('required') && signUpForm.controls['PASSWORD'].touched\">This field is required.</span>\r\n      <div class='align-buttons'>\r\n         <button md-raised-button class='set-background' \r\n         [disabled]='!signUpForm.valid' \r\n         (click)=\"signup()\">\r\n         Sign Up\r\n         </button>\r\n         &nbsp;\r\n         <button md-raised-button \r\n            class='set-background'\r\n            (click)=\"signin()\">\r\n         Sign In\r\n         </button>\r\n      </div>\r\n   </form>\r\n   </md-grid-tile>\r\n   <!--END SIGNUP FIELDS-->\r\n   <!--START SOCIAL BUTTONS-->\r\n   <md-grid-tile [colspan]=\"1\" [rowspan]=\"4\" class='social-buttons'>\r\n   <md-list>\r\n      <md-list-item>\r\n         <button md-raised-button class='set-background'>Continue with Facebook</button>\r\n      </md-list-item>\r\n      <md-list-item>\r\n         <button md-raised-button class='set-background'>Continue with Google</button>\r\n      </md-list-item>\r\n   </md-list>\r\n   </md-grid-tile>\r\n   <!--END SOCIAL BUTTONS-->\r\n</md-grid-list>\r\n<!-- END  SIGNUP PAGE -->"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-dev\">\r\n  <div class=\"center-main\">\r\n  \t\t<div class=\"main-text\">\r\n  \t\t\t<span class=\"big-font\">Find</span>\r\n  \t\t\t<img class=\"love-image\" src='../assets/images/Find-Love.svg' alt=\"Flirt\">\r\n  \t\t\t<span class=\"big-font\">for your lovely pets</span>\r\n  \t\t</div>\r\n  \t\t<div class=\"sub-text\">\r\n  \t\t\t<span class=\"medium-font\">Here is the mate for your pet</span>\r\n  \t\t</div>\r\n  \t\t<div class=\"buttons\">\r\n  \t\t\t<button md-raised-button class=\"light-green pet-button-size\">\r\n\t\t\t\t<img class=\"pet-button-images\" src='../assets/images/Flirt.svg' alt=\"Flirt\">\r\n\t\t\t</button>\r\n\t\t\t<button (click)=\"gotoSignIn()\" md-raised-button class=\"light-green pet-button-flirt\">\r\n\t\t\t\tFlirt Now\r\n\t\t\t</button>\r\n  \t\t</div>\r\n  \t\t<div class=\"small-text\">\r\n  \t\t\t<span>We ask you some questions</span>\r\n  \t\t</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderService = (function () {
    function LoaderService() {
    }
    LoaderService.prototype.showLoader = function () {
        //$('.overlay').fadeIn(300);
        document.getElementById("loadingImage").style.display = "block";
    };
    ;
    LoaderService.prototype.hideLoader = function () {
        //$('.overlay').fadeOut(300);
        document.getElementById("loadingImage").style.display = "none";
    };
    ;
    return LoaderService;
}());
LoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetManagement; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetManagement = (function () {
    function PetManagement(firebaseService, dbProvider) {
        this.firebaseService = firebaseService;
        this.dbProvider = dbProvider;
        this.myPet = null;
    }
    PetManagement.prototype.getAllPets = function () {
        return this.dbProvider.list("/pets");
    };
    PetManagement.prototype.getAllPetsOfTypeAndOppositeGender = function (type, gender) {
        return this.dbProvider.list("/pets", {
            query: {
                orderByChild: "gender",
                equalTo: gender
            }
        })
            .filter(function (pets) {
            return true;
            //return pet.type == type;
        });
    };
    PetManagement.prototype.getMyPets = function () {
        var _this = this;
        /*let loggedInUser = this.firebaseService.loggedInUser;
        debugger;
        if(!loggedInUser){
            return;
        }*/
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].create(function (observer) {
            var authStateSubscription = _this.firebaseService.authState.subscribe(function (user) {
                authStateSubscription.unsubscribe();
                if (user) {
                    //observer.next(user);
                    var listSubscription = _this.dbProvider.list("/pets", {
                        query: {
                            orderByChild: "owner",
                            equalTo: user.uid
                        }
                    }).subscribe(function (pets) {
                        //listSubscription.unsubscribe();
                        observer.next(pets);
                    });
                }
                else {
                    observer.next(null);
                }
            });
        });
        /*return this.dbProvider.list("/pets", {
            query : {
                orderByChild : "owner",
                equalTo : this.firebaseService.loggedInUser.uid
            }
        });*/
    };
    PetManagement.prototype.getMyPet = function () {
        var _this = this;
        if (this.myPet) {
            return new Promise(function (resolve, reject) { return resolve(_this.myPet); });
        }
        else {
            return new Promise(function (resolve, reject) {
                var subscription = _this.getMyPets().subscribe(function (pets) {
                    if (pets && pets.length > 0) {
                        _this.myPet = pets[0];
                        resolve(_this.myPet);
                    }
                    else {
                        reject(null);
                    }
                });
            });
        }
    };
    PetManagement.prototype.addNewPet = function (pet) {
        if (!pet.images) {
            pet.images = [];
        }
        pet.likedCount = 0;
        pet.owner = this.firebaseService.loggedInUser.uid;
        return this.dbProvider.list("/pets").push(pet);
    };
    PetManagement.prototype.uploadImage = function (path, content, contentType) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child(path).putString(content, contentType);
    };
    PetManagement.prototype.updatePetDetails = function (pet) {
        return this.dbProvider.list("/pets").update(pet.$key, pet);
    };
    return PetManagement;
}());
PetManagement = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], PetManagement);

var _a, _b;
//# sourceMappingURL=petmanagement.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PetImage; });
/* unused harmony export Notification */
var User = (function () {
    function User() {
    }
    return User;
}());

var Pet = (function () {
    function Pet() {
    }
    return Pet;
}());

var PetImage = (function () {
    function PetImage() {
    }
    return PetImage;
}());

var Notification = (function () {
    function Notification() {
    }
    return Notification;
}());

//# sourceMappingURL=schema.js.map

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = (function () {
    function LoginService() {
        this.isUserLoggedIn = false;
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    LoginService.prototype.setLogin = function (isloggedIn) {
        this.isUserLoggedIn = isloggedIn;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ })

},[531]);
//# sourceMappingURL=main.bundle.js.map