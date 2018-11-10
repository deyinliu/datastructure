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
