
template <class T>
int count(const T& array){
    return sizeof(array)/sizeof(array[0]);
}

template <class T0 , class T1>
T0 add(const T0& x , const T1& y){
    return x+y;
}

template <class T0 , class T1>
T0 times(const T0& x , const T1& y){
    return x*y;
}

template <class T>
void print(T &a){
    #include "typeinfo"
    using namespace std;
    
    if (typeid(a[0])==typeid(char)) {
        std::cout<<a<<std::endl;
    }
    else {
        for(int i = 0; i < count(a); i++)
        {
        std::cout<<a[i]<<std::endl; 
        }
    }
  
}
void print(int a){
    using namespace std;
    std::cout<<a<<std::endl;
}

void print(float a){
    using namespace std;
    std::cout<<a<<std::endl;
}

void print(bool a){
    using namespace std;
    std::cout<<a<<std::endl;
}
// void print(int a){
//     _print(a);
// }

