
// assignment operators
// =
// +=
// -=
// *=
// /=
// %=
// **=

// var a = 5;

// a **=10; // a = a + 10;
// console.log(a);


// arithmetic operators 
// +
// -
// *
// /
// %
// **
// ++
// --

// var a = 5;
// a--;
// console.log(a);


// comparison operators
// ==
// ===
// !=
// !==
// < 
// <= 
// > 
// >= 




// if ("A"<"b") {
//     console.log('This is true');
    
// }else{
//     console.log("This is false");
    
// }


// logical operators
// && - AND
// || - OR
// !  - NOT

// if (!true || "A"<"b" || 5<1 || false) {
//         console.log(true);
            
// }else{
//     console.log(false);
    
// }

// string operators
// +
// +=

// var a = "Hello";
// a+= "JS"
// console.log(a);




// var infoOne = "Javascript";
// infoOne += " Hello";

// console.log(infoOne);


// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// var a = 5,  b= 10
// console.log(a,b);


// \            (tərs slash)(Qaçındırma operatorudur)
// var info = "JavaScript\"s Book";
// console.log(info); 

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)


// var a = true;
// var b = typeof a;
// console.log(b);


// void         (dəyişkənin dəyərini undefined etmək üçündür)

// var a = 5;
// console.log(void(a));










// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------


// var abstract = 5;
// abstract = 15;
// console.log(abstract);



// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)




// const a = 5;
//  a = 10;
// console.log(a);



// // global
// if (true) {
//     // local global
//     let a = 5;
//     if (true) {
//         // local global
//         if (true) {
//             // local global
//             if (true) {
//                 // local
//             }
            
//         }
        
//     }
//     console.log(a);
    
// }
