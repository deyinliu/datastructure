#include "iostream"
#include "./main/base.h"
using namespace std;

template<class T>
void bubbleSort(T &a){
    int len = count(a);
    int isSort = false;
    for(int i = 0; i < len && !isSort; i++){
        isSort = true;
        for(int j = 0; j < len-i-1 ; j++){
            if(a[j]>a[j+1]){
                std::swap(a[j] , a[j+1]);
                isSort = false;
            }
        }  
    } 
}

int main(int argc, char const *argv[])
{
    int a[] = {2,4,1,1,3};
    bubbleSort(a);
    print(a);
    return 0;
}
