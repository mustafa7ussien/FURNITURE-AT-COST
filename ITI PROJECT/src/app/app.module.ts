import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { PopularProductsComponent } from './components/home/popular-products/popular-products.component';
import { OurBestComponent } from './components/home/our-best/our-best.component';
import { SuggestedProductsComponent } from './components/home/suggested-products/suggested-products.component';
import { OurInstagramComponent } from './components/home/our-instagram/our-instagram.component';
import { TopPickComponent } from './components/home/top-pick/top-pick.component';
import { OurFeaturesComponent } from './components/home/our-features/our-features.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { PageComponent } from './components/page/page.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/page/login/login.component';
import { CardComponent } from './components/page/card/card.component';
import { CategoriesComponent } from './components/page/categories/categories.component';
import { CheckoutComponent } from './components/page/checkout/checkout.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { ElementsComponent } from './components/blog/elements/elements.component';
import { SubBlogComponent } from './components/blog/sub-blog/sub-blog.component';
import { GalleryComponent } from './components/blog/gallery/gallery.component';
import { Header1Component} from './components/blog/sub-blog/header/header1.component';
import { Header2Component } from './components/blog/blog-details/header/header2.component';
import {Header3Component} from "./components/blog/elements/header/header3.component";
import { LeftblogComponent } from './components/blog/sub-blog/leftblog/leftblog.component';
import { RightblogComponent } from './components/blog/sub-blog/rightblog/rightblog.component';
import { LeftBlogDetailsComponent } from './components/blog/blog-details/left-blog-details/left-blog-details.component';
import { RightBlogDetailsComponent } from './components/blog/blog-details/right-blog-details/right-blog-details.component';
import { MainElementComponent } from './components/blog/elements/main-element/main-element.component';
import { LastMainElementComponent } from './components/blog/elements/last-main-element/last-main-element.component';
import { ProuductDetailsComponent } from './components/page/prouduct-details/prouduct-details.component';
import { ProductDataComponent } from './components/page/prouduct-details/product-data/product-data.component';
import { DetailsBottomComponent } from './components/page/prouduct-details/details-bottom/details-bottom.component';
import { CommentsComponent } from './components/page/prouduct-details/comments/comments.component';
import { ReviewsComponent } from './components/page/prouduct-details/reviews/reviews.component';
import { DiscriptionComponent } from './components/page/prouduct-details/discription/discription.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    PopularProductsComponent,
    OurBestComponent,
    SuggestedProductsComponent,
    OurInstagramComponent,
    TopPickComponent,
    OurFeaturesComponent,
    ProductComponent,
    AboutComponent,
    PageComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    CardComponent,
    CategoriesComponent,
    CheckoutComponent,
    BlogDetailsComponent,
    ElementsComponent,
    SubBlogComponent,
    GalleryComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    LeftblogComponent,
    RightblogComponent,
    LeftBlogDetailsComponent,
    RightBlogDetailsComponent,
    MainElementComponent,
    LastMainElementComponent,
    ProuductDetailsComponent,
    ProductDataComponent,
    DetailsBottomComponent,
    CommentsComponent,
    ReviewsComponent,
    DiscriptionComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
