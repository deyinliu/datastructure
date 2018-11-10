#include "iostream"
#include "./main/base.h"
template <class T0 , class T1>
T0 inner_product(const T0 *a , const T1 *b , int n){
    T0 sum = 0;
    
    for(int i = 0; i < n; i++)
    {
        sum = add(sum , times(a[i] , b[i]));
    }
    
    return sum;
}

int main(int argc, char const *argv[])
{
    int x[] = {1,2};
    int y[] = {5,6};
    int a = 4;
    float b = 6.3;
    int sum = inner_product(x , y , count(x));

    printf("%d\n" , sum);
    
    printf("%lu\n" ,sizeof(x));
    return 0;
}
