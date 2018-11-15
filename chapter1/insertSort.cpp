#include "iostream"
#include "./main/base.h"

using namespace std;
template <class T>
void insertSort(T &a){
    
    for(int i = 0; i < count(a); i++)
    {
        for(int j = i+1; j>0; j--){
            if(a[j]<a[j-1]){
                std::swap(a[j] , a[j-1]);
            }
        }
    }
    
}
int main(int argc, char const *argv[])
{
    int a[] = {5,4,3,2,1};
    insertSort(a);
    print(a);
    return 0;
}
